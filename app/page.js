
import React from "react";
import Link from "next/link";
import Page from "./week-2/page";

export default function Home() {
  const linkStyles="underline text-cyan-300 hover:text-cyan-900"
  const mainStyles="bg-black h-screen"
  
  return(
    <main className={mainStyles}>
      <h1 className="text-xl text-white">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
      <Link className={linkStyles} href="./week-2">Week 2 Assignment</Link>
      </div><div>
      <Link className={linkStyles} href="./week-3">Week 3 Assignment</Link>
      </div>
    </main>
  );
}