
import React from "react";
import Link from "next/link";
import Page from "./week-2/page";

export default function Home() {
  return(
    <main className="h-screen">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2">Week 2 Assignment</Link>
    </main>
  );
}