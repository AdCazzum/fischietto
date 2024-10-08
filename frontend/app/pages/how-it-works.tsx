"use client";

import React from "react";
import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How it works - Fischietto</title>
      </Head>
      <div className="intro">
        <h1 className="intro-title">How It Works</h1>

        <p>
          Fischietto is a secure platform for whistleblowing within organizations. Here&apos;s how it works briefly:
        </p>

        <h3>Sign in with Google or Other Providers (Laser Romae)</h3>
        <p>
          Fischietto supports identity verification through Google Workspace,
          or any other identity provider like Laser Romae.
          When signing in with Google, it returns a piece of data called
          {"  "}
          <a
            href="https://en.wikipedia.org/wiki/JSON_Web_Token"
            target="_blank"
            rel="noopener noreferrer"
          >
            JWT
          </a>
          , which contains some information about your account, and a signature from Google.
          <p></p>
          This process can be easily adapted to another provider, such as Laser Romae,
          to return all the necessary payload information on which the proof is based.
        </p>
        <p>Here is an example of what the data in the JWT token looks like:</p>
        <code>
          {`
  headers: {};
  payload: {
    name: "Gianni Maria",
    hd: "ideacorp.aciceri.dev",          // domain name of the company
    email: "sa@ideacorp.aciceri.dev",
    email_verified: true,
    nonce: "a27702e8318d0eea0731caeaa7873507",
    iss: "https://accounts.google.com",
    iat: 1726663035,
    exp: 1726666635,
    ...
  }
  signature: V7QYQ98PqoeoE89uwmueaKxEGh8Ed...
          `}
        </code>

        <p>
          The signature portion at the end is a
          {" "}
          <a
            href="https://en.wikipedia.org/wiki/Digital_signature"
            target="_blank"
            rel="noopener noreferrer"
          >
            digital signature
          </a>{" "}
          from Google attesting to the payload data.
          This signature can only be generated by Google&apos;s private key
          (or any other identity provider&apos;s key like Laser Romae).
        </p>

        <p className="highlight">
          Anyone with the above data and signature can verify the authenticity
          of the data using the provider&apos;s public key.
        </p>

        <h3>Signing Arbitrary Messages</h3>
        <p>
          We can send a random value called
          <span className="inline-code">nonce</span> to the identity provider during the
          sign-in process, and they will include that in the signed JWT token payload.
        </p>
        <p>
          This allows signing arbitrary information along with account details. In our case, we set the nonce as a
          <a
            href="https://www.geeksforgeeks.org/what-is-hashing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hash
          </a>{" "}
          of the whistleblower&apos;s report.
        </p>
        <p className="highlight">
          Now, anyone with your report and the JWT token can verify that the
          message was created by someone who owns the associated identity provider account.
        </p>

        <h3>Aztec - Zero Knowledge Proof</h3>
        <p>
          Verifying authenticity of the account and message like above
          requires sharing the full JWT data (including name and email)
          with the verifier. Of course, this is not ideal for whistleblowers
          who seek to remain anonymous. To address this, we use
          <a
            href="https://www.youtube.com/watch?v=fOGdb1CTu5c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zero Knowledge Proofs
          </a>
          .
        </p>
        <p>
          Using ZK circuits, you can prove that you have run a program correctly,
          without revealing the input to the program - or only revealing selective
          parts of the input. The ZK circuit itself is not private.
        </p>
        <p>
          Anyone can verify the ZK proof along with the &quot;public inputs&quot;
          to convince themselves that the program was run correctly with valid inputs.
        </p>
        <p>
          For Fischietto, we built a ZK circuit that verifies the digital signature
          of the JWT and only reveals the company domain (hd field in the JWT token)
          and the nonce (hash of the whistleblower&apos;s report).
        </p>
        <p className="highlight">
          Now, anyone with the report, the company domain, and the ZK proof can verify
          that the report was created by someone with an account from the specified
          identity provider.
        </p>

        <h3>Fhenix - Message Storage</h3>
        <p>
          When a report is submitted, the whistleblower is asked to sign in
          (using the report hash as a nonce), and a ZK proof is generated.
          This entire process happens in the browser, and no data leaves the browser.
        </p>
        <p>
          Once the proof is generated, the report and the proof are sent to a server,
          which verifies the proof and stores the report in a database.
          The server never learns anything about the whistleblower.
        </p>
        <p>
          The server cannot alter any message, as the ZK proof for that message would become invalid.
          However, the server can censor or delete certain messages.
        </p>
        <p>
          To prevent censorship, messages are sent directly to a blockchain,
          the reports and proofs are stored on the Fhenix network,
          a secure and encrypted storage system.
          Any interactions such as upvotes or downvotes,
          tied to a report, are also stored on Fhenix and are done anonymously
          using similar encryption and privacy-preserving techniques.
        </p>
        <br />
        <br />
      </div>
    </>
  );
}
