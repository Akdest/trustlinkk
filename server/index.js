const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const LEDGER_FILE = path.join(__dirname, "blockchain", "ledger.json");

if (!fs.existsSync(LEDGER_FILE)) {
  fs.writeFileSync(LEDGER_FILE, JSON.stringify([]));
}

app.post("/api/scan", (req, res) => {
  const { tagId } = req.body;

  const logs = JSON.parse(fs.readFileSync(LEDGER_FILE));
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
