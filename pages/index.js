import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashboard from "./dashboard";
import Login from "./login";
import Signup from "./signup";
import HomePage from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Waiting List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
