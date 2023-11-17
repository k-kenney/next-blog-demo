import Image from 'next/image'
import Link from 'next/link'
import profileImg from "@/project-files/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light'>
        <div className='md:w-16 w-12 rounded-full overflow-hidden border border-solid border-dark dark:border-light md:mr-4 mr-2'>
            <Image src={profileImg} alt="Codebucks" className='w-full h-auto rounded-full' sizes="33vw" priority></Image>
        </div>
        <span className='font-bold dark:font-semibold md:text-xl text-lg'>Codebucks </span>
    </Link>
  )
}

export default Logo