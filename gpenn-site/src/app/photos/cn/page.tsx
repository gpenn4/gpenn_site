import Image from 'next/image'

export default function ChinaPage() {
    return <div>
        <div className="gallery gap-4">
            <h1 className="text-xl font-bold py-20">Hong Kong</h1>
            <Image src="/photos/china/hk2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk6.JPG" alt="" width={125}
                height={100} />
            <Image src="/photos/china/hk3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk4.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk1.JPG" alt="" width={125}
                height={100} />
            <Image src="/photos/china/hk5.jpg" alt="" width={125}
                height={100} />
        </div>
    </div>
}