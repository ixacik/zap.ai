"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={168}
          height={27}
        />
      </Link>
      <div className="flex gap-2">
        <UserButton afterSignOutUrl="/" />
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={30}
              height={30}
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/images/logo-text.svg"
                alt="menu"
                width={168}
                height={27}
              />

              <nav className="flex flex-col justify-between">
                <SignedIn>
                  <ul className="header-nav_elements">
                    {navLinks.map((link) => {
                      const isActive = link.route === pathname;

                      return (
                        <li
                          key={link.route}
                          className={`${
                            isActive ? "text-purple-500" : "text-gray-700"
                          }`}
                        >
                          <Link href={link.route} className="sidebar-link">
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                            />
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </SignedIn>

                <SignedOut>
                  <Button
                    asChild
                    className="button bg-purple-gradient bg-cover"
                  >
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                </SignedOut>
              </nav>
            </>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileNav;
