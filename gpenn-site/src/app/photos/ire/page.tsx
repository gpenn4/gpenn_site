import Image from 'next/image'

export default function IrelandPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/ireland/ire1.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/ireland/dublin2.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/ireland/dublin3.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/ireland/dublin4.jpg" alt="" width={125}
                height={100} />
            <Image src="/photos/ireland/dublin5.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/ireland/dublin6.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/ireland/dublin7.JPG" alt="" width={300}
                height={100} />

        </div>

    </div>
}