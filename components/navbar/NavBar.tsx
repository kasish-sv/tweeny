import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { SignInButton, SignUpButton, Show } from "@clerk/nextjs";
import CustomUserButton from "./CustomUserButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "./ThemeToggle";
import { MobileNavbar } from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
export default async function NavBar() {
  const user = await currentUser();

  return (
    <div className="flex items-center p-5 md:px-8 font-medium border-b border-gray-300 tweeny-appearance">
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex-wrap gap-3 hidden sm:block">
        <NavigationMenu>
          <Link href="/" className="font-serif text-2xl italic px-3">
            Tweeny
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {user?.publicMetadata?.onboardingComplete &&
            user?.publicMetadata?.role === "tweeny" ? (
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navbar-link">
                  <Link href="/accept-job">Accept a Job</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navbar-link">
                  <Link href="/log-job">Search for a Tweeny</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex space-x-2.5 ml-auto items-center">
        <Show when="signed-out">
          <SignInButton>
            <button className="navbar-link cursor-pointer">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="text-ceramic-white h-8 rounded-full px-4 sm:h-12 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <CustomUserButton />
        </Show>
        <ModeToggle />
      </div>
    </div>
  );
}
