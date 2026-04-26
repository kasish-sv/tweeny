import Link from "next/link";
import { auth, clerkClient } from "@clerk/nextjs/server";

import { useUser } from "@clerk/nextjs";
export default async function Home() {
  const { isAuthenticated, userId } = await auth();
  const client = await clerkClient();
  const user = await client.users.getUser(userId!);
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the home page. If you are seeing this, you have completed
        onboarding.
      </p>
      <p>{`Role: ${user?.publicMetadata?.role}`}</p>
    </div>
  );
}
