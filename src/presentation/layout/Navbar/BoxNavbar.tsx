import Image from "next/image";
import Logo from "@/src/presentation/layout/Navbar/assets/logoipsum-360.svg";
import { navLinks } from "./constants/navLinks";
import Link from "next/link";
import User from "@/src/presentation/layout/Navbar/assets/user.svg";
import Menu from "@/src/presentation/layout/Navbar/assets/menu.svg";

export default function BoxNavbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="logo"
          width={150}
          height={100}
          quality={100}
          priority
        />

        <div className="hidden lg:flex pl-[74px] gap-x-14">
          {navLinks.map((item, index) => (
            <Link key={index} href="/">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-x-4">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2">
            <Image src={User} alt="user"/>
          <span className="hidden font-medium text-[#36485C] lg:block">Sign In</span>
        </div>
        <Image src={Menu} alt="menu" className="lg:hidden"/>
      </div>
    </nav>
  );
}
