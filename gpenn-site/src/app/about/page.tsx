import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <div className="space-y-6 space-x-6  px-40">
        <h1 className="text-3xl font-bold">About Me</h1>
        <h2 className="text-xl font-bold">Hi, I&apos;m Georgia Pennington!</h2>
        <p>I&apos;m 23 years old with a BSc Honours in Compurter Science and Psychology from the University of St Andrews.
          Outside of academia, I enjoy photography, reading, travel, and embroidery.
        </p>

        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            At St Andrews, I was a member of Szentek, a non-profit arts collective which raises money for Variety Scotland, a
            children&apos;s charity based in Glasgow. In my final 2 years, I was Executive Director of the collective. I was responsible
            for overseeing the cross-functional teams (music, art, media, sponsorship, merchandise), managing communications with
            our vendors, and large-scale event production.
          </div>
          <div className='grid grid-cols-2 gap-10 items-center content-center'>
            <Link href="https://szentek.com">
              <Image src="/icons/szentek_gif.gif" alt="Szentek" width={300}
                height={200} />
            </Link>
             <Link href="https://www.variety.org.uk/location/scotland/">
              <Image src="/icons/VARIETY.png" alt="Variety Logo" width={100}
                height={200} />
            </Link>
          </div>
        </div>
        <h1 className="text-xl font-bold">Technical Experience</h1>
        <div className='gallery'>
          <div>
            <Image src="/icons/python_logo.png" alt="Python Logo" width={30}
              height={100} />
            <h1>Python</h1>
          </div>
          <div>
            <Image src="/icons/java_logo.png" alt="Java Logo" width={30}
              height={100} />
            <h1>Java</h1>
          </div>
          <div>
            <Image src="/icons/git_logo.png" alt="Git Logo" width={30}
              height={100} />
            <h1>Git</h1>
          </div>
          <div>
            <Image src="/icons/MatLab_Logo.png" alt="MatLab Logo" width={40}
              height={100} />
            <h1>MatLab</h1>
          </div>
          <div>
            <Image src="/icons/firebase_logo.png" alt="Firebase Logo" width={30}
              height={100} />
            <h1>Firebase</h1>
          </div>
        </div>
        <div>
        </div>
      </div>
    </main >
  );
}