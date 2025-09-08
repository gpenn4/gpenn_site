import Image from 'next/image'

export default function CzechiaPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/czechia/prague1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague4.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague6.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague7.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/czechia/prague2.jpg" alt="" width={125}
                height={100} />
            
        </div>

    </div>
}