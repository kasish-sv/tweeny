"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function MobileNavbar() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => router.push("/")}>
          Home
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => router.push("/about")}>
          About
        </DropdownMenuItem>
        {user?.publicMetadata?.onboardingComplete &&
        user?.publicMetadata?.role === "tweeny" ? (
          <DropdownMenuItem onSelect={() => router.push("/accept-job")}>
            Accept a Job
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onSelect={() => router.push("/log-job")}>
            Search for a Tweeny
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
