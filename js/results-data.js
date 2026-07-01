/* ============================================================
   CWA SCIENCE CLASSES — Weekly Test Result Data
   Demo dataset. Replace / extend with real weekly test results.
   Structure: mobile number => record
   ============================================================ */

const CWA_RESULTS_DB = {
  "9876543210": {
    name: "Rohit Kumar",
    className: "Class 10",
    testName: "Weekly Test #14 — Light & Real Numbers",
    date: "28 June 2026",
    subjects: [
      { name: "Physics", icon: "physics", marks: 46, total: 50 },
      { name: "Chemistry", icon: "chemistry", marks: 42, total: 50 },
      { name: "Maths", icon: "maths", marks: 48, total: 50 }
    ],
    rank: 2,
    totalStudents: 64
  },
  "9123456780": {
    name: "Priya Sharma",
    className: "Class 12",
    testName: "Weekly Test #14 — Electric Charges & Relations",
    date: "28 June 2026",
    subjects: [
      { name: "Physics", icon: "physics", marks: 49, total: 50 },
      { name: "Chemistry", icon: "chemistry", marks: 47, total: 50 },
      { name: "Maths", icon: "maths", marks: 50, total: 50 }
    ],
    rank: 1,
    totalStudents: 58
  },
  "9988776655": {
    name: "Aman Kumar Yadav",
    className: "Class 9",
    testName: "Weekly Test #14 — Motion & Number System",
    date: "28 June 2026",
    subjects: [
      { name: "Physics", icon: "physics", marks: 33, total: 50 },
      { name: "Chemistry", icon: "chemistry", marks: 29, total: 50 },
      { name: "Maths", icon: "maths", marks: 36, total: 50 }
    ],
    rank: 9,
    totalStudents: 71
  },
  "9000011122": {
    name: "Simran Kumari",
    className: "Class 11",
    testName: "Weekly Test #14 — Kinematics & Basic Chemistry",
    date: "28 June 2026",
    subjects: [
      { name: "Physics", icon: "physics", marks: 44, total: 50 },
      { name: "Chemistry", icon: "chemistry", marks: 45, total: 50 },
      { name: "Maths", icon: "maths", marks: 41, total: 50 }
    ],
    rank: 4,
    totalStudents: 52
  }
};

// Demo helper numbers shown to user on the form
const CWA_DEMO_NUMBERS = ["9876543210", "9123456780", "9988776655", "9000011122"];
