import Image from "next/image";
import Arrow from "@/src/presentation/components/Hero/assets/arrow.svg";
import HeroImage from "@/src/presentation/components/Hero/assets/HeroImage.svg";
import Gradient from "@/src/presentation/components/Hero/assets/Gradient.svg";
import Google from "@/src/presentation/components/Hero/assets/Google.svg";
import Slack from "@/src/presentation/components/Hero/assets/Slack.svg";
import Trustpilot from "@/src/presentation/components/Hero/assets/Trustpilot.svg";
import CNN from "@/src/presentation/components/Hero/assets/CNN logo.svg";
import Clutch from "@/src/presentation/components/Hero/assets/Clutch.svg";

export default function BoxHero() {
  return (
    <section className="pt-4 lg:pt-10">
      <div className="px-5 lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] shadow-2xl lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Princing
            <div>
              <Image src={Arrow} alt="arrow" />
            </div>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full items-center">
        <Image
          src={Gradient}
          alt="gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
          quality={100}
          priority
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
            quality={100}
            priority
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between px-20">
            <p className="text-white text-center lg:text-[18px]">
                Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                <Image src={Google} alt="google"/>
                <Image src={Slack} alt="slack"/>
                <Image src={Trustpilot} alt="trustpilot"/>
                <Image src={CNN} alt="cnn"/>
                <Image src={Clutch} alt="clutch"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
