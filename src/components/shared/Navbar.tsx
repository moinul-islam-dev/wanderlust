"use client";

import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

const accountLinks = [
  { label: "Profile", href: "/profile" },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`z-50 bg-white ${
        isHomePage
          ? "absolute top-5 left-4 right-4"
          : "sticky top-0 w-full border-b border-neutral-200/70"
      }`}
    >
      <nav className="relative mx-auto flex h-14 w-full max-w-360 items-center justify-between px-6 lg:px-8">
        {/* Main Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Button
                  variant="ghost"
                  render={<Link href={link.href} />}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative h-auto rounded-none bg-transparent px-0 text-[15px] font-medium hover:bg-transparent ${
                    isActive
                      ? "text-brand hover:text-brand"
                      : "text-neutral-900 hover:text-brand"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-brand" />
                  )}
                </Button>
              </li>
            );
          })}
        </ul>

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          aria-label="Wanderlast home"
        >
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            priority
            className="h-5 w-auto sm:h-6"
          />
        </Link>

        {/* Account Navigation */}
        <ul className="ml-auto flex items-center gap-4 sm:gap-6">
          {accountLinks.map((link) => (
            <li key={link.href}>
              <Button
                variant="ghost"
                render={<Link href={link.href} />}
                className="h-auto rounded-none bg-transparent px-0 text-sm font-medium text-neutral-900 hover:bg-transparent hover:text-brand sm:text-[15px]"
              >
                {link.label === "Profile" && (
                  <User
                    className="size-4"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}

                {link.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

