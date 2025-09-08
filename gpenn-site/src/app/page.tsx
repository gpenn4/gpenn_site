import Image from "next/image";
import { getImageProps } from 'next/image'
import Marquee from "./components/marquee";


export default function Home() {
  return (<div
      style={{
        backgroundImage: 'url("/photos/scotland/scotland35.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-dvh w-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center overflow-x-clip"> 
     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="space-y-4 w-screen">
          <Marquee text="GEORGIA PENNINGTON • GEORGIA PENNINGTON • GEORGIA PENNINGTON • "></Marquee>
          <Marquee text="BSc Honours Computer Science & Psychology • BSc Honours Computer Science & Psychology • "></Marquee>
          {/* <Marquee text="Based in London • Based in London • Based in London • "></Marquee> */}
        </div>
        </section>
      </main>
      {/* </section> */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div >
  );
}
