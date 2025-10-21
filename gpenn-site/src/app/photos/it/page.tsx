import Image from 'next/image'

export default function ItalyPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/italy/genoa9.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa4.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa5.JPG" alt="" width={125}
                height={100} />
            <Image src="/photos/italy/genoa6.JPG" alt="" width={300}
                height={100} />
            {/* <Image src="/photos/italy/genoa7.JPG" alt="" width={300}
                height={100} /> */}
            <Image src="/photos/italy/genoa8.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa10.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa11.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/italy/genoa12.jpg" alt="" width={300}
                height={100} />
        </div>

    </div>
}