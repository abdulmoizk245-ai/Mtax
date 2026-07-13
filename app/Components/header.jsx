
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top dark line */}
      <div className="h-[4px] w-full bg-[#171d2c]" />

      {/* Main Header */}
      <div className="mx-auto grid  grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        {/* Logo - Left */}
        <Link href="/" className="justify-self-start">
          <Image
            src="/images/logo.png"
            alt="MTAX Logo"
            width={130}
            height={60}
            priority
            className="h-[60px] w-[180px] object-contain"
          />
        </Link>

        {/* Navigation - Center */}
        <nav className="hidden items-center justify-center gap-6 md:flex">
          <Link
            href="/"
            className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm"
          >
            Home
          </Link>

          <Link
            href="/group-of-companies"
            className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600"
          >
            Group of Companies
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600"
          >
            Contact Us
          </Link>
        </nav>

        {/* Phone Number - Right */}
        <a
          href="tel:02135311837"
          className="hidden items-center gap-2 justify-self-end rounded-md border border-gray-700 px-3 py-1.5 text-sm text-gray-800 transition-colors hover:bg-gray-100 md:flex"
        >
          <span>☎</span>
          <span>021-35311837</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="justify-self-end rounded-md border border-gray-300 px-3 py-2 text-sm md:hidden"
        >
          Menu
        </button>
      </div>
    </header>
  );
}