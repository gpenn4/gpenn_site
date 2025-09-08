import Image from 'next/image'

export default function BelgiumPage() {
    return <div>
        <div className="gallery gap-4">
            <Image src="/photos/belgium/brussels2.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/belgium/brussels4.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/belgium/brussels5.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/belgium/brussels6.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/belgium/brussels7.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/belgium/brussels8.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/belgium/brussels9.jpg" alt="" width={300}
                height={100} />
            
            {/* <Image src="/photos/belgium/brussels3.jpg" alt="" width={300}
                height={100} /> */}

            <Image src="/photos/belgium/brussels1.jpg" alt="" width={125}
                height={100} />

        </div>

    </div>
}