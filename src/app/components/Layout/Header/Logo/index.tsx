import Image from "next/image";
import Link from "next/link";
interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/thefull_logo.svg"
        alt="The Full logo"
        width={140}
        height={44}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="dark:hidden"
      />
      <Image
        src="/images/logo/thefull_logo_white.svg"
        alt="The Full logo"
        width={140}
        height={44}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="dark:block hidden"
      />
    </Link>
  );
};

export default Logo;
