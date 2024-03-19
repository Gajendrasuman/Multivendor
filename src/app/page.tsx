import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation/page";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Navigation />
      <UserButton/>
    </>
  );
}
