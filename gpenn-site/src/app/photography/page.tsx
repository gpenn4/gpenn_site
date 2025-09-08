"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { feature } from "topojson-client";
import { geoNaturalEarth1, geoPath, type GeoProjection } from "d3-geo";
import type { FeatureCollection, Feature, Geometry } from "geojson";

const geoUrl = "/data/countries-110m.json";

const regionMap: Record<string, string> = {
  "United Kingdom": "uk",
  "United States of America": "usa-ca",
  Iceland: "ice",
  "South Africa": "sa",
  Portugal: "pt",
  Japan: "jp",
  China: "cn",
  Czechia: "cz",
  Belgium: "be",
  Austria: "at",
  France: "fr",
  Spain: "es",
  Morocco: "mar",
  Ireland: "ire",
  Italy: "it",
};

type CountryFeature = Feature<Geometry, { name?: string }>;

export default function MapPage() {
  const router = useRouter();

  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Load TopoJSON → GeoJSON once per mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(geoUrl, { cache: "force-cache" }); // local static file
      const topo = await res.json();

      const objects = (topo as any).objects;
      const objKey = objects?.countries ? "countries" : Object.keys(objects || {})[0];

      const out = feature(topo as any, objects[objKey]) as
        | FeatureCollection<Geometry, { name?: string }>
        | Feature<Geometry, { name?: string }>;

      const feats =
        (out as FeatureCollection<Geometry>).type === "FeatureCollection"
          ? ((out as FeatureCollection<Geometry>).features ?? [])
          : [out as CountryFeature];

      if (!cancelled) setCountries(feats as CountryFeature[]);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Observe container size (so we can fit the projection)
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const ro = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      // keep a ~1.6:1 aspect ratio
      const w = Math.max(320, Math.floor(width));
      const h = Math.max(240, Math.round(w / 1.6));
      setSize({ width: w, height: h });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Create a NEW projection whenever data/size change (no mutation of a memoized instance)
  const projection: GeoProjection | null = useMemo(() => {
    if (!countries.length || size.width === 0 || size.height === 0) return null;
    const proj = geoNaturalEarth1();
    const fc: FeatureCollection = { type: "FeatureCollection", features: countries } as any;
    // snug fit
    (proj as any).fitSize([size.width, size.height], fc);
    return proj;
  }, [countries, size.width, size.height]);

  const path = useMemo(() => (projection ? geoPath(projection) : null), [projection]);

  const isReady = projection && path;

  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Photography Gallery</h1>

        <div ref={containerRef} className="rounded-2xl border p-3">
          {!isReady ? (
            <div className="text-sm text-gray-500 p-6">Loading map…</div>
          ) : (
            <svg
              width={size.width}
              height={size.height}
              role="img"
              aria-label="World map; clickable countries indicate photo galleries"
            >
              <rect width="100%" height="100%" fill="#2ec5e3ff" />

              <g>
                {countries.map((country, i) => {
                  const name = country.properties?.name ?? "";
                  const code = regionMap[name];
                  const d = path!(country) || "";

                  const baseFill = code ? "#e5e7eb" : "#f8fafc";
                  const hoverFill = code ? "#c07eea" : "#f8fafc";

                  return (
                    <path
                      key={i}
                      d={d}
                      fill={baseFill}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      style={{ cursor: code ? "pointer" : "default" }}
                      onClick={() => code && router.push(`/photos/${code}`)}
                      onMouseEnter={(e) => {
                        if (code) e.currentTarget.setAttribute("fill", hoverFill);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.setAttribute("fill", baseFill);
                      }}
                    >
                      {name && <title>{name + (code ? " — click to view photos" : "")}</title>}
                    </path>
                  );
                })}
              </g>
            </svg>
          )}

          <p className="text-sm text-gray-500 mt-3">
            Psst — only highlighted countries are clickable (where I have photos).
          </p>
        </div>
      </div>
    </main>
  );
}