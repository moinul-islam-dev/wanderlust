"use client";

import { Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Add Destinations", href: "/add-destination" },
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
  // Keying the open state by pathname closes the menu automatically on navigation.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isMenuOpen = openPath === pathname;

  const closeMenu = () => setOpenPath(null);
  const toggleMenu = () => setOpenPath(isMenuOpen ? null : pathname);

  // Close the mobile menu when pressing Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`z-50 bg-white ${
        isHomePage
          ? "absolute top-5 left-4 right-4 w-auto border-b border-neutral-200/70"
          : "sticky w-full top-0 py-3 border-b border-neutral-200/70"
      }`}
    >
      <nav className="relative mx-auto flex h-14 w-full max-w-360 items-center justify-between px-6 lg:px-8">
        {/* Main Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <li key={link.href}>
                <Button
                  variant="ghost"
                  nativeButton={false}
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

        {/* Account Navigation (desktop) */}
        <ul className="ml-auto hidden items-center gap-4 sm:gap-6 lg:flex">
          {accountLinks.map((link) => (
            <li key={link.href}>
              <Button
                variant="ghost"
                nativeButton={false}
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

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon-lg"
          className="ml-auto text-neutral-900 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="size-5" strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu className="size-5" strokeWidth={1.8} aria-hidden="true" />
          )}
        </Button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full mt-2 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <li key={link.href}>
                  <Button
                    variant="ghost"
                    nativeButton={false}
                    render={<Link href={link.href} />}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={`h-auto w-full justify-start rounded-lg px-3 py-2 text-[15px] font-medium ${
                      isActive
                        ? "bg-brand/10 text-brand hover:bg-brand/10 hover:text-brand"
                        : "text-neutral-900 hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Button>
                </li>
              );
            })}
          </ul>

          <div className="my-2 h-px bg-neutral-200/70" />

          <ul className="flex flex-col gap-1">
            {accountLinks.map((link) => (
              <li key={link.href}>
                <Button
                  variant="ghost"
                  nativeButton={false}
                  render={<Link href={link.href} />}
                  onClick={closeMenu}
                  className="h-auto w-full justify-start gap-2 rounded-lg px-3 py-2 text-[15px] font-medium text-neutral-900 hover:text-brand"
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
