'use client'
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll"

const intro: React.FC = () => {
  return (
    <section id={headerItems.home.page}
      className="h-screen flex flex-col text-center items-center md:flex-row md:text-start"
    >
      <div> {/*left section image */}
        <Image
          src={userInfo.picture}
          alt="dp"
          width={500}
          height={500}
          className="rounded-full shadow-2xl mt-10"
        />

      </div>
      <div className="md:ml-20 sm:ml-12 md:w 1/2"> {/*right section text*/}
       <h1 className="text-5xl uppercase hidden md:block ">Web Developer</h1>
       <h1 className="text-2xl mt-5 md:text-3xl">
        Hi, I&apos;`, `&lsquo;`, `&#39;`, `&rsquo;m <span className="text-red-600 text-3xl md:text-2xl">{userInfo.name}</span>
       </h1>
       <p className="mt-3 mb-3">{userInfo.heading}</p>
       <ScrollLink 
       to={headerItems.projects.page}
       className="bg-teal-600 w-28 h-11 flex items-center justify-center cursor-pointer rounded text-neutral-100"
       spy={true}
       smooth={true}
       >Projects</ScrollLink>
      </div>
    </section>
  )
}

export default intro;