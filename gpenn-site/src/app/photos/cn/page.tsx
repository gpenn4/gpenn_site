import Image from 'next/image'

export default function ChinaPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/china/hk2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk4.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk1.JPG" alt="" width={125}
                height={100} />
        </div>

    </div>
}