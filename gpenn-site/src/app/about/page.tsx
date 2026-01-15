import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <div className="space-y-6 space-x-6  px-40">
        <h2 className="text-xl font-bold">Hi, I&apos;m Georgia Pennington!</h2>
        <div className='grid grid-cols-2 gap-0 items-center '>
          <div className='flex items-center justify-center'>
            <img src="/photos/me.jpg" alt="Me" className="w-1/2 h-auto rounded-lg shadow-lg" />
          </div>
          <div className='flex items-center'>
            {/* <p>I have work experience in software and data engineering, as well as application development.</p> */}
            <p>I&apos;m 23 years old with a BSc Honours in Computer Science and Psychology from the University of St Andrews.
              Outside of academia, I enjoy photography, reading, travel, and embroidery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            At St Andrews, I was a member of Szentek, a non-profit arts collective which raises money for Variety Scotland, a
            children&apos;s charity based in Glasgow. In my final 2 years, I was Executive Director of the collective. I was responsible
            for overseeing the cross-functional teams (music, art, media, sponsorship, merchandise), managing communications with
            our vendors, and large-scale event production.
          </div>
          <div className='grid grid-cols-2 gap-10 flex items-center justify-center'>
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
        <h1 className="text-xl font-bold">Technical Skills</h1>
        <div className="grid grid-cols-8 gap-15 flex justify-center items-center">
          <div className='flex justify-center items-center flex-col'>
            <Image src="/icons/python_logo.png" alt="Python Logo" width={30}
              height={100} className='img-object-contain h-[30px]' />
            <h1>Python</h1>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <Image src="/icons/java_logo.png" alt="Java Logo" width={30}
              height={100} className='img-object-contain h-[30px]' />
            <h1>Java</h1>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <Image src="/icons/git_logo.png" alt="Git Logo" width={30}
              height={100} className='img-object-contain h-[30px]' />
            <h1>Git</h1>
          </div>
          <div className='flex justify-center items-center flex-col'  >
            <Image src="/icons/Matlab_Logo.png" alt="Matlab Logo" width={30}
              height={100} className='img-object-contain h-[30px]' />
            <h1>MatLab</h1>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <Image src="/icons/firebase_logo.png" alt="Firebase Logo" width={30}
              height={100} className='img-object-contain h-[30px]' />
            <h1>Firebase</h1>
          </div>
        </div>
        <div>
        </div>
      </div>
    </main >
  );
}