import Image from "next/image";
import logo from "../assets/HUB.png"
import Link from "next/link";
import GenereDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";
const Header = ()=>{
    return(
        <div className="w-full flex items-center justify-between backdrop:blur-2xl transition-colors p-5  bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0">
           <Link  href={"/"}><Image src={logo} alt="logo" width={120} height={100} priority={true} className="cursor-pointer w-40 h-auto"></Image></Link>
           <div className="text-white flex space-x-2  items-center">
            <GenereDropDown></GenereDropDown>
            <SearchInput></SearchInput>
            <ThemeToggler></ThemeToggler>
           </div>
        </div>

    );
}
export default Header;

