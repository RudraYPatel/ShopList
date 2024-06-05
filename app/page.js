
import React from "react";
import Link from "next/link";
import Page from "./week-2/page";

export default function Home() {
  const linkStyles="text-2xl underline text-cyan-300 hover:text-cyan-600 visited:text-purple-600 mb-2"
  const mainStyles=" container-lg bg-black h-screen"
  const divStyles="mt-20 text-center text-xl"
  
  return(
    <main className={mainStyles }>
      <h1 className="text-3xl text-center text-white ">CPRG 306: Web Development 2 - Assignments</h1>
      <div className={divStyles }>
      <div>
      <Link className={linkStyles} href="./week-2">Week 2 Assignment</Link>
      </div>
      <div>
      <Link className={linkStyles} href="./week-3">Week 3 Assignment</Link>
      </div>
      <div>
      <Link className={linkStyles} href="./week-4">Week 4 Assignment</Link>
      </div>
      </div>
    </main>
  );
}