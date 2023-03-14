import workTogetherImage from "@/public/images/introduction-img.png";
import Image from "next/image";

const WorkTogetherSection = () => {
  return (
    <div id="about-us">
      <div className="mx-auto max-w-7xl px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1 pt-24 md:py-24 sm:py-32 flex justify-center items-center">
            <Image src={workTogetherImage} alt="Work Together" />
          </div>
          <div className="col-span-2 md:col-span-1 lg:pl-20">
            <div className="bg-[#F7F7F9] py-24 lg:py-0 lg:h-[666px]  px-6 md:pl-8 md:pr-28 flex items-center">
              <div className="flex flex-col gap-2">
                <h2 className="tag">work together</h2>
                <p className="title">Keep your home secure with Komuni</p>
                <p className="description">
                  With several measures in place, residents can feel more secure
                  in their community, and security teams and community leaders
                  can take proactive steps to prevent incidents and respond to
                  emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogetherSection;
