# Fischetto

## Introduction

For the **Fischetto project**, the goal is to dimostrate a real world **needed** zero-knowledge (ZK) based platform leveraging the Aztec network and Fhenix technologies. The purpose is to create a privacy-centric whistleblowing application that ensures both confidentiality and verifiability of the reports, while enhancing the security and anonymity of the whistleblower.

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
