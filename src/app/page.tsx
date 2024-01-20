"use client";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <Link
        href="https://imskanand.vercel.app/"
        className="font-semibold text-xl text-green-500"
      >
        Profile Link
      </Link>
    </main>
  );
}
