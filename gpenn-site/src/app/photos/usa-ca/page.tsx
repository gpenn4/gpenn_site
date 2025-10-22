import Image from 'next/image'

export default function USPage() {
    return <div>
        <div className="gallery gap-4">
            <h1 className="text-xl font-bold py-20">Colorado</h1>
            <Image src="/photos/usa/Aspen3.jpg" alt="Couple in the snow" width={300}
                height={100} />
            <Image src="/photos/usa/Aspen2.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/Aspen5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/Aspen1.jpeg" alt="Snowy river" width={125}
                height={100} />
            <Image src="/photos/usa/aspen6.JPG" alt="Snowy bridge" width={300}
                height={100} />
            <Image src="/photos/usa/aspen8.JPG" alt="Outdoor stairs" width={125}
                height={100} />
            <Image src="/photos/usa/aspen9.jpg" alt="Couple in the snow" width={300}
                height={100} />
            <Image src="/photos/usa/aspen10.JPG" alt="Mountain pond" width={300}
                height={100} />
            <Image src="/photos/usa/aspen7.JPG" alt="skiing" width={300}
                height={100} />

            <h1 className="text-xl font-bold py-20">Connecticut</h1>
            <Image src="/photos/usa/gwich1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gwich2.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gwich3.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gwich4.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gwich5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gwich6.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gwich1.heic" alt="" width={125}
                height={100} />

            <h1 className="text-xl font-bold py-20">New York</h1>
            <Image src="/photos/usa/ny3.JPG" alt="City skyline" width={300}
                height={100} />
            <Image src="/photos/usa/NY2.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny4.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny5.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny6.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny7.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny8.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny10.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/ny11.jpg" alt="" width={130}
                height={100} />
            <Image src="/photos/usa/ny12.jpg" alt="" width={130}
                height={100} />
            <Image src="/photos/usa/NY1.jpg" alt="sunbathing" width={300}
                height={100} />

            <h1 className="text-xl font-bold py-20">New Hampshire</h1>
            <Image src="/photos/usa/nh1.jpg" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/nh2.jpg" alt="" width={130}
                height={100} />
            <Image src="/photos/usa/nh3.jpg" alt="" width={130}
                height={100} />

            <h1 className="text-xl font-bold py-20">Georgetown</h1>
            <Image src="/photos/usa/gtown1.JPG" alt="" width={300}
                height={100} />
            <Image src="/photos/usa/gtown2.jpg" alt="" width={130}
                height={100} />
            <Image src="/photos/usa/gtown3.jpg" alt="" width={130}
                height={100} />
        </div>
    </div>
}