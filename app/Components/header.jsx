"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

const companies = [
  { name: "Blaze Group", href: "/Blaze" },
  { name: "CSM", href: "/CSM" },
  { name: "De Novo Energy", href: "/Energy" },
  { name: "Fabrica", href: "/Fabrica" },
  { name: "MSBI", href: "/MSBI" },
  { name: "Shamooz", href: "/Shamooz" },
  { name: "Universal Exports", href: "/Universal-exports" },
  { name: "Yuemei", href: "/Yuemei" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isHomeActive = pathname === "/";
  const isContactActive = pathname === "/contact";
  const isCompaniesActive = companies.some(
    (company) => company.href === pathname
  );

  const openCompanies = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setCompaniesOpen(true);
  };

  const scheduleCloseCompanies = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setCompaniesOpen(false);
    }, 3000);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }

        setCompaniesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="w-full bg-white">
      {/* Top Dark Line */}
      {/* <div className="h-[4px] w-full bg-[#171d2c]" /> */}

      {/* Main Header */}
      <div className="mx-auto grid grid-cols-[auto_1fr] items-center px-4 py-3 sm:px-6 sm:py-4 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo */}
        <Link
          href="/"
          className="justify-self-start"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="MTAX Logo"
            width={130}
            height={60}
            priority
            className="h-[44px] w-[130px] object-contain sm:h-[60px] sm:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-6 md:flex">
          <Link
            href="/"
            className={`rounded-md px-3 py-1.5 text-sm font-medium  transition-colors ${
              isHomeActive
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-800 hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          {/* Group of Companies Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openCompanies}
            onMouseLeave={scheduleCloseCompanies}
          >
            <button
              type="button"
              aria-expanded={companiesOpen}
              aria-haspopup="true"
              onClick={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                }

                setCompaniesOpen((open) => !open);
              }}
              className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                isCompaniesActive
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-800 hover:text-blue-600"
              }`}
            >
              Group of Companies
              <FaChevronDown
                aria-hidden="true"
                className={`text-[10px] transition-transform duration-300 ${
                  companiesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {companiesOpen && (
              <div className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {companies.map((company) => (
                  <Link
                    key={company.href}
                    href={company.href}
                    onClick={() => setCompaniesOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === company.href
                        ? "bg-blue-500 text-white"
                        : "text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {company.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isContactActive
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-800 hover:text-blue-600"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Phone Number */}
        {/* <a
          href="tel:02135311837"
          className="hidden items-center gap-2 justify-self-end rounded-md border border-gray-700 px-3 py-1.5 text-sm text-gray-800 transition-colors hover:bg-gray-100 md:flex"
        >
          <span>☎</span>
          <span>021-35311837</span>
        </a> */}
        <a
          href="tel:02135311837"
          className="hidden items-center gap-2 justify-self-end rounded-md border border-gray-700 px-3 py-1.5 text-sm text-gray-800 transition-colors hover:bg-gray-100 md:flex"
        >
          <Image
            src="/phone.svg"
            alt="Telephone"
            width={18}
            height={18}
            className="h-[18px] w-[18px] object-contain"
          />

          <span>021-35311837</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="justify-self-end rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-[#111827] md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-gray-200 transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`rounded-md px-3 py-2 text-sm font-medium shadow-sm transition-colors ${
              isHomeActive
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-800 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          {/* Mobile Companies Accordion */}
          <button
            type="button"
            aria-expanded={mobileCompaniesOpen}
            onClick={() => {
              setMobileCompaniesOpen((open) => !open);
            }}
            className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isCompaniesActive
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-800 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            Group of Companies
            <FaChevronDown
              aria-hidden="true"
              className={`text-[10px] transition-transform duration-300 ${
                mobileCompaniesOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`overflow-hidden pl-3 transition-[max-height] duration-300 ease-in-out ${
              mobileCompaniesOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {companies.map((company) => (
              <Link
                key={company.href}
                href={company.href}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileCompaniesOpen(false);
                }}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  pathname === company.href
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {company.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isContactActive
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-800 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            Contact Us
          </Link>

          {/* <a
            href="tel:02135311837"
            className="mt-1 flex items-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100"
          >
            <span>☎</span>
            <span>021-35311837</span>
          </a> */}
          <a
            href="tel:02135311837"
            className="hidden items-center gap-2 justify-self-end rounded-md border border-gray-700 px-3 py-1.5 text-sm text-gray-800 transition-colors hover:bg-gray-100 md:flex"
          >
            <Image
              src="/phone.svg"
              alt="Telephone"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />

            <span>021-35311837</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
