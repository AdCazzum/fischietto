"use client";

import React from "react";
import SignInButton from "../components/siwg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fischietto</title>
      </Head>

      <div className="page">
        <main className="intro">
          <h1 className="intro-title">Welcome to Fischetto 🤫🤐👮🔗</h1>
          <p>
            Fischietto is a secure whistleblowing platform that enables you to anonymously
            report workplace issues while ensuring your identity is protected.
          </p>
          <p>
            We use <a target="_blank" href="https://aztec.network/">Aztec</a>
            Zero Knowledge Proofs (ZKPs) to verify that you belong to your organization
            without revealing personal information, and
            <a target="_blank" href="https://www.fhenix.io/">Fhenix</a> for
            encrypted operations on reports and votes, ensuring end-to-end
            confidentiality through Fully Homomorphic Encryption (FHE).
          </p>
          <p>
            Sign in with your <u>work Google account</u>
            (<span className="inline-code">you@company.com</span>) to
            get started.
          </p>

          <SignInButton />
        </main>
      </div>
    </>
  );
}
