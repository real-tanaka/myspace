"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
        <Image
          src={session.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
    );
  }
  return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "unauthenticated") {
    return <></>;
  }
  if (status === "loading") {
    return <>...</>;
  }
  return <button onClick={() => signOut()}>Sign out</button>;
}
