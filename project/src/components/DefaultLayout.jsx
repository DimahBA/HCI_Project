import React from "react";
import TableHeader from "./TableHeader";
import Navbar from "./Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <TableHeader />

      {children}

      <Navbar />
    </>
  );
}
