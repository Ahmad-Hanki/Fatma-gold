import Image from "next/image";
import logo from "@/app/icon.webp";
import Link from "next/link";
const Logo = () => {
  return (
    <Link
      href={"/"}
      className="relative overflow-hidden w-24 aspect-square bg-transparent"
    >
      <Image
        className="object-cover object-center bg-transparent"
        fill
        alt="logo"
        src={logo}
      />
    </Link>
  );
};

export default Logo;
