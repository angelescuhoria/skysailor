import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/SkySailorLogo.png"
      width={230}
      height={48}
      alt="logo"
      className="object-contain"
    />
  );
}