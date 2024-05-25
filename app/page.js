
import React from "react";
import Link from "next/link";
import Page from "./week-2/page";

export default function Home() {
  const linkStyles="underline text-cyan-600 hover:text-cyan-800"
  
  return(
    <main className="h-screen">
      <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className={linkStyles} href="./week-2">Week 2 Assignment</Link>
    </main>
  );
}