# Fischetto

## Introduction

For the **Fischetto project**, the goal is to dimostrate a real world **needed** zero-knowledge (ZK) based platform leveraging the Aztec network and Fhenix technologies. The purpose is to create a privacy-centric whistleblowing application that ensures both confidentiality and verifiability of the reports, while enhancing the security and anonymity of the whistleblower.

## W3PN - Pagency Framework

The **Pagency Framework** breaks down project development into 9 categories. Here's how it applies to **Fischietto**:

1. **Humans**: Whistleblowers seeking to report workplace misconduct anonymously.
2. **Data**: Whistleblower reports, timestamps, and upvotes/downvotes, stored encrypted on-chain.
3. **Challenge**: Ensuring privacy and anonymity while verifying identity.
4. **Threat Actors**: Malicious actors seeking to uncover whistleblower identities or manipulate reports.
5. **Privacy Layers**: Zero Knowledge Proofs (ZKP), encrypted storage on Fhenix.
6. **Solution**: Integrating ZKP, Google/Laser Romae for identity verification, Fhenix for data storage.
7. **Partners**: Laser Romae (for ID verification), Fhenix, and potentially other blockchain solutions.
8. **Resources**: Fhenix network, ZKP libraries (Aztec, Noir), Google OAuth, Laser Romae.
9. **Success Metrics**: Number of reports submitted, proof verification success rate, upvote/downvote engagement, whistleblower anonymity protection.

### Overview of the Fischetto Project:

1. **Frontend (React)**: The user interface will allow whistleblowers to anonymously submit reports via a form. The report data will include:
   - **ID**: A unique identifier for the report.
   - **Text**: The whistleblower's message.
   - **Timestamp**: The time of the report submission.
   - **Company Name**: The organization related to the report.
   - **Proof**: A cryptographic proof to verify the authenticity of the whistleblower.
   - **KID**: Google public key ID used for signing the report.

2. **ZK Proof with Aztec**: Utilizing Aztec’s **Noir programming language** and zero-knowledge proofs (ZKPs), the platform will allow whistleblowers to anonymously prove their affiliation with a company without exposing their identity. This will ensure that the whistleblower’s credentials are verified while protecting their personal information.

3. **Vote Handling and Proofs**: The system will also support votes tied to each testimony, allowing multiple parties to verify or support a report’s claims without compromising anonymity. Each vote will contain:
   - A unique ID.
   - The report ID it references.
   - The value of the vote (upvote/downvote).
   - A timestamp.
   - Proof of authenticity.

4. **Integration with Fhenix**: The platform will use **Fully Homomorphic Encryption (FHE)** provided by Fhenix for secure storage and management of the reports and votes. This will allow operations on encrypted data, ensuring that even the platform administrators cannot see the contents of the whistleblower reports or votes.

propose and implement proof-of-personhood/identity solutions using unique identifiers (e.g., passport, ID card) to:

5. **Laser Romae**: We tackle proof-of-personhood/identity in whistleblowing, in a non-intrusive way, using web3 technologies such as previously described, which securely associate the whistleblower’s identity with their report, without revealing personal information and preventing spam.

### Key Technologies:
- **Aztec Network**: A layer-2 rollup on Ethereum providing private and scalable smart contracts. It uses **Noir**, a language built for privacy-preserving applications, enabling the creation of ZK circuits for secure, confidential whistleblowing.
- **Fhenix**: A platform offering computation over encrypted data through **Fully Homomorphic Encryption**. This allows performing operations on encrypted reports and votes, ensuring end-to-end confidentiality.

### Potential Use Cases:
- Secure reporting of workplace fraud, ethical violations, or malfeasance without fear of retaliation.
- Anonymous voting mechanisms to support or challenge the validity of whistleblower claims, ensuring transparency and collective accountability.

### Challenges Solved:
- **Anonymity**: Ensures the whistleblower's identity is protected via ZK proofs and encryption.
- **Verifiability**: Uses cryptographic proofs to verify the whistleblower's identity without revealing personal details.
- **Data Security**: Leveraging FHE ensures that no one can access the sensitive data within reports and votes without proper decryption keys.

## Technical Details

### Frontend:

To configure the frontend integrated with the Aztec solution, which ensures identity verification linked to a corporation without sharing sensitive information, we support Google’s OAuth2.

#### Steps to configure Google OAuth2:
1. **Create a Project in Google Cloud Platform (GCP)**:
   - Go to the [GCP Console](https://console.cloud.google.com/).
   - Create a new project for the whistleblowing app.
   
2. **Configure OAuth Consent Screen**:
   - Navigate to **API & Services** > **OAuth consent screen**.
   - Set the app name, authorized domains, and privacy policy URL.
   
3. **Create OAuth 2.0 Credentials**:
   - Under **Credentials**, click **Create Credentials** > **OAuth 2.0 Client IDs**.
   - Specify application type (e.g., web) and configure the **redirect URIs**.

This enables whistleblowers to log in and verify their identity via Google without exposing personal data, thanks to the privacy-preserving ZK proofs implemented with Aztec.


### How to run

Set your environment variables:
```sh
# Google Client ID
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
```

Run below commands to start the Next.js app:
```sh
cd frontend/app
yarn
yarn dev
```


### Smart Contracts:

TBD

## TODO:

### Technical Main Tasks Overview

1. [] **Aztec Deep Dive for Identity Verification**: 
   - Investigate and fully integrate Aztec's zero-knowledge proofs (ZKPs) to handle whistleblower identity verification without exposing personal data. Use Noir circuits to protect privacy while validating credentials.

2. [] **UI Improvements**:
   - Adjust colors for better contrast.
   - Reduce chat features, focusing more on a well-framed form-based UI.
   - Add upvote/downvote buttons to allow interaction with whistleblower reports.

3. [] **Develop Fhenix Smart Contracts for Storage**:
   - Build and deploy smart contracts using Fhenix to securely store whistleblower reports and votes with encryption.

4. [] **Integrate Fhenix Smart Contracts with UI**:
   - Link the frontend UI to interact seamlessly with Fhenix’s smart contracts, enabling real-time submission and retrieval of encrypted whistleblowing data.