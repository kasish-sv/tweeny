"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();
  const [role, setRole] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData);
    if (res?.message) {
      // Forces a token refresh and refreshes the `User` object
      console.log(res.message);
      await user?.reload();
      router.refresh();
      router.push("/");
    }
    if (res?.error) {
      setError(res?.error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Tweeny!</h1>
      <form action={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Are you someone looking to access our services, or are you a tweeny
            looking to offer your services?
          </label>
          <Select onValueChange={setRole} name="role" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">I'm a user</SelectItem>
              <SelectItem value="tweeny">I'm a tweeny</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {role === "tweeny" && (
          <>
            <Input
              type="text"
              name="aadhar"
              placeholder="Aadhar Number"
              required
            />
            <Input type="text" name="address" placeholder="Address" required />
          </>
        )}
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </div>
  );
}
