import Image from 'next/image'

export default function CzechiaPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/czechia/prague1.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague3.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague4.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague5.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague6.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague7.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague2.jpg" alt="" width={125}
                height={100} />
            
        </div>

    </div>
}