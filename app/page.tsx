import { BoxFAQs } from "@/src/presentation/components/FAQs/BoxFAQs";
import { BoxFeatures } from "@/src/presentation/components/Features/BoxFeatures";
import { BoxHero } from "@/src/presentation/components/Hero/BoxHero";
import { BoxNavbar } from "@/src/presentation/layout/Navbar/BoxNavbar";

export default function Home() {
  return (
    <>
      {/* BoxNavbar */}
      <BoxNavbar />
      {/* BoxHero */}
      <BoxHero />
      {/* BoxFeatures */}
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <BoxFeatures />
        <BoxFAQs/>
      </div>
    </>
  );
}
