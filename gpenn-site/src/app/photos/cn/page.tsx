import Image from 'next/image'

export default function ChinaPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/china/hk2.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk3.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk4.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/china/hk1.jpg" alt="" width={125}
                height={100} />
        </div>

    </div>
}