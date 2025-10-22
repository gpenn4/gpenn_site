import Image from 'next/image'

export default function AustriaPage() {
    return <div>
        <div className="gallery gap-4">
            <h1 className="text-xl font-bold py-20">Vienna</h1>
            <Image src="/photos/austria/vienna2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna9.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna13.JPG" alt="" width={125}
                height={100} />
            <Image src="/photos/austria/vienna3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna6.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna4.jpg" alt="Lower Belvedere" width={300}
                height={100} />
            <Image src="/photos/austria/vienna5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna14.JPG" alt="" width={125}
                height={100} />
            <Image src="/photos/austria/vienna7.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna10.JPG" alt="St Stephen's Cathedral" width={300}
                height={100} />
            <Image src="/photos/austria/vienna8.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/austria/vienna12.jpg" alt="" width={125}
                height={100} />
            <Image src="/photos/austria/vienna15.jpg" alt="" width={125}
                height={100} />
        </div>
    </div>
}