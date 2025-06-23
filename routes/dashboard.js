const express = require("express");
const router = express.Router();

// Dummy data simulating fetched DB records
const metrics = [
  { title: "Opening Balance", value: 100, color: "bg-blue-500" },
  { title: "Closing Balance", value: 80, color: "bg-gray-500" },
  { title: "Purchases", value: 12, color: "bg-green-500" },
  { title: "Transfers In", value: 9, color: "bg-yellow-500" },
  { title: "Transfers Out", value: 3, color: "bg-red-500" },
  { title: "Assigned Assets", value: 15, color: "bg-purple-500" },
  { title: "Expended Assets", value: 5, color: "bg-pink-500" },
];

const recentActivity = [
  { id: 1, action: "Purchase", item: "Rifle", quantity: 10, date: "2025-06-20" },
  { id: 2, action: "Transfer", item: "Jeep", quantity: 2, date: "2025-06-21" },
  { id: 3, action: "Assign", item: "Pistol", quantity: 3, date: "2025-06-22" },
];

const trendData = [
  { date: "2025-06-20", quantity: 10 },
  { date: "2025-06-21", quantity: 12 },
  { date: "2025-06-22", quantity: 15 },
  { date: "2025-06-23", quantity: 9 },
  { date: "2025-06-24", quantity: 18 },
];

const categoryData = [
  { name: "Purchases", value: 12 },
  { name: "Transfers In", value: 9 },
  { name: "Transfers Out", value: 3 },
  { name: "Assignments", value: 15 },
  { name: "Expenditures", value: 5 },
];

router.get("/dashboard", (req, res) => {
  res.json({ metrics, recentActivity, trendData, categoryData });
});

module.exports = router;