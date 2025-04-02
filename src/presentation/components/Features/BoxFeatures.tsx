import Image from "next/image";
import Background01 from "@/src/presentation/components/Features/assets/Background01.svg";
import Background02 from "@/src/presentation/components/Features/assets/Background02.svg";
import Background03 from "@/src/presentation/components/Features/assets/Background03.svg";
import Check from "@/src/presentation/components/Features/assets/Check.svg";
import BtnBlue from "@/src/presentation/components/Features/assets/BtnBlue.svg";
import BtnGreen from "@/src/presentation/components/Features/assets/BtnGreen.svg";
import BtnPink from "@/src/presentation/components/Features/assets/BtnPink.svg";


export function BoxFeatures() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Background01}
          alt="background01"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image src={Background01} alt="" className="pt-[24px] sm:hidden" />
          <p className="py-[24px] text-2xl font-medium text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <span>
              <Image src={BtnBlue} alt="btnblue" />
            </span>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Background02}
          alt="background01"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Customer Suport
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Get in touch with your customers
          </h1>
          <Image src={Background02} alt="" className="pt-[24px] sm:hidden" />
          <p className="py-[24px] text-2xl font-medium text-[#36485C] lg:text-[18px]">
          Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More
            <span>
              <Image src={BtnGreen} alt="btngreen" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Background03}
          alt="background01"
          className="hidden w-1/2 sm:block rounded-[16px]"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
          Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Monitor your site’s new subscribers
          </h1>
          <Image src={Background03} alt="" className="pt-[24px] sm:hidden rounded-[16px]"/>
          <p className="py-[24px] text-2xl font-medium text-[#36485C] lg:text-[18px]">
          Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <div className="flex w-full gap-x-[24px]">
            <div className="w-1/2 flex flex-col gap-y-3">
                <h3 className="text-[20px] font-medium text-[#36485C]">100+</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
                <h3 className="text-[20px] font-medium text-[#36485C]">100+</h3>
                <p>Conse adipiscing elit</p>
            </div>
          </div>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More {""}
            <span>
              <Image src={BtnPink} alt="btnpink" />
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
}
