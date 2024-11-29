import Image from "next/image";

export function Header() {
  return (
    <header className="bg-secondary-100/20 text-white">
      <div className="container mx-auto py-4">
        <Image
          src="/kinee/logo_hor.png"
          alt="Kinee logo"
          width={120}
          height={40}
        />
      </div>
    </header>
  );
}
