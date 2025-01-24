import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id={headerItems.about.page}
      className="h-screen flex flex-col text-center items-center md:flex-row md:text-start"
    >
      <div className="m-4 md:ml-20 sm:ml-12 md:w 1/2"> {/*left section text*/}
        <h1 className="text-6xl my-6 ">About</h1>
        <h2 className="text-3xl my-4 text-red-600">
          Get to know me!
        </h2>
        <p className="[&>p]:mt-5" dangerouslySetInnerHTML={{ __html: userInfo.about }} />
      </div>
      <div className="flex flex-col justify-center items-center text-center"> {/*right section image */}
        <Image
          src={userInfo.picture}
          alt="dp"
          width={400}
          height={400}
          className="m-auto"
        />
        <div className="mt-2 break-words">
          {
            userInfo.skills.map((skill, index) => (
              <span
                key={index} // Add a unique key prop here
                className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md"
              >
                {skill}
              </span>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default About;
