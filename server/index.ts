import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const LEDGER_FILE = path.join(__dirname, "blockchain", "ledger.json");

// Ensure ledger file exists
if (!fs.existsSync(LEDGER_FILE)) {
  fs.writeFileSync(LEDGER_FILE, JSON.stringify([]));
}

// API: POST /api/scan
app.post("/api/scan", (req: Request, res: Response) => {
  const { tagId } = req.body as { tagId: string };

  const logs: { item_id: string; time: string; action: string }[] = JSON.parse(
    fs.readFileSync(LEDGER_FILE, "utf-8")
  );

  const currentTime = new Date().toISOString();
  const isFraud = tagId.includes("fraud");
  const action = isFraud ? "Fraudulent Entry" : "Genuine Entry";

  const logEntry = { item_id: tagId, time: currentTime, action };
  logs.push(logEntry);

  fs.writeFileSync(LEDGER_FILE, JSON.stringify(logs, null, 2));

  res.json({ message: action, logs });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
