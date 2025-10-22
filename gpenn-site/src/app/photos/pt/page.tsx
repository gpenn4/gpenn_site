import Image from 'next/image'

export default function PortugalPage() {
    return <div>
        <div className="gallery gap-4">
            {/* LISBON */}
            <h1 className="text-xl font-bold py-20">Lisbon</h1>
            <Image src="/photos/portugal/lisbon1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon6.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon7.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon4.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon8.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/lisbon9.JPG" alt="" width={300}
                height={100} />

            {/* PORTO */}
            <h1 className="text-xl font-bold py-20">Porto</h1>
            <Image src="/photos/portugal/porto1.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/porto2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/porto5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/porto10.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/porto13.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/porto3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/porto11.jpg" alt="" width={125}
                height={100} />
            <Image src="/photos/portugal/portugal6.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/portugal4.JPG" alt="" width={300}
                height={100} />

            {/* NAZARÉ */}
            <h1 className="text-xl font-bold py-20">Nazaré</h1>
            <Image src="/photos/portugal/portugal1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/portugal3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/portugal5.JPG" alt="" width={300}
                height={100} />
            
            {/* DOURO VALLEY */}
            <h1 className="text-xl font-bold py-20">Douro Valley</h1>
            <Image src="/photos/portugal/portugal2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/portugal/portugal17.JPG" alt="" width={300}
                height={100} />
        </div>
    </div>
}