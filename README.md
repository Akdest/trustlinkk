# 🛡️ TrustLink — RFID-Powered Fraud Detection for Retail (Walmart Sparkathon 2025)

**TrustLink** is a full-stack simulation platform that detects, logs, and prevents **RFID tag fraud** using a secure blockchain-backed logging system. It empowers retailers (like Walmart) to verify product authenticity across the supply chain and avoid inventory fraud.

Built with **React + TypeScript** (frontend) and **Express.js** (backend), TrustLink showcases how RFID + Cybersecurity can revolutionize retail security.

---

## 📦 Project Structure

```

TrustLink/
├── client/        # NextJs + TypeScript frontend
├── server/        # Express backend with blockchain simulation
├── README.md      # You are here!

````

---

## 🚀 Tech Stack

| Area        | Tech Used                          |
|-------------|------------------------------------|
| Frontend    | React, TypeScript, Tailwind, Vite |
| Backend     | Node.js, Express.js, CORS         |
| Blockchain  | JSON-based simulated ledger        |
| Data Flow   | REST API between client & server   |

---

## 🔐 Problem We Solve

Retail giants like Walmart face:

- Unauthorized product replacements
- Counterfeit RFID tags in transit
- Lack of real-time fraud detection

> 🔍 TrustLink provides **live RFID tag scanning**, **blockchain-based verification**, and **fraudulent scan alerts** — all in one tool.

---

## 🧪 Try It Locally (Simulated Scan)

### 1. Clone the Repository

```bash
git clone https://github.com/jasminekaur02/TrustLink.git
cd TrustLink
````

---

### 2. Start the Server

```bash
cd server
npm install
node index.js
```

Server runs on: `http://localhost:5000`

---

### 3. Start the Frontend

```bash
cd ../client
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

### 4. Simulate Scanning

In the UI:

* ✅ Enter: `legit-123` → **Genuine Entry**
* ❌ Enter: `fraud-xyz` → **Fraudulent Entry**

You'll see:

* Blockchain Log of Scans
* Fraud Summary Card

---

## 📊 Features

✅ Simulate RFID tag verification
✅ Detect and log fraudulent activity
✅ Real-time UI updates
✅ Tamper-proof blockchain ledger
✅ Clean UI with React + Tailwind

---

## 🏁 Next Steps

🔧 Coming Soon:

* Admin dashboard with role-based logins
* Email/SMS alerts for fraud
* GPS-based supply chain mapping
* QR/RFID cross-verification

---

## 🧠 Inspired by

Walmart's use of RFID in inventory tracking ([case study](https://www.rfidjournal.com/news/walmart-re-commits-to-rfid-with-supplier-mandates/193702)) — we identified gaps in **fraud detection** and added real-time **security validation** layers to improve retail trust.

---

## 🙌 Team WSEC-CREW

Built for **Walmart Sparkathon 2025**
https://github.com/Akdest/trustlinkk

---

## 📄 License

MIT License

```

---
