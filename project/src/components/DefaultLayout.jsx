import React from "react";
import TableHeader from "./TableHeader";
import Navbar from "./Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="relative h-screen w-full max-w-md mx-auto bg-light">
        <TableHeader />

        {/* Main content area */}
        <main className="pt-[45px] pb-[64px] mt-5 overflow-y-auto h-full no-scrollbar scrollable">
          {children}
        </main>

        <Navbar />
      </div>
    </>
  );
}
