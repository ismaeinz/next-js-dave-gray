import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
export default function About() {
  // throw new Error("Not Today");

  return (
    <>
      <h1>About </h1>
      <Link href={"/"}>Link to Home Page</Link>
    </>
  );
}
