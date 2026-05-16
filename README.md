# junior-dev-challenge

Welcome to the frontend engineering assessment for our Gym SaaS platform! This repository contains the structural guidelines for a 48-hour practical coding assignment designed to evaluate your foundations in native web technologies, DOM architectures, and responsive user experiences.

---

## 📌 Objective
Your objective is to build a high-fidelity micro-frontend application that simulates a **Gym Reception Desk Management System**. Front-desk gym staff will use this layout to check in arriving members, run live text searches across names, filter accounts by structural states, and provision new accounts on the fly without page refreshes.

---

## 🛠️ Technology Constraints & Setup
*   **Core Stack:** Pure HTML5, CSS3, and Vanilla JavaScript (ES6+).
*   **Framework Restrictions:** No frameworks or external compiler utilities are permitted (No React, Vue, Angular, jQuery, Tailwind CSS, Bootstrap, etc.). Everything must write directly into the browser run-time environment.
*   **To Run:** The application must execute instantly out-of-the-box by double-clicking the root `index.html` file or by running a local utility server like VS Code Live Server.

---

## 💾 Core Dataset
Initialize the following dataset exactly as structured within your `app.js` file to run your dashboard state operations:

```javascript
const gymMembers = [
  { id: "1", name: "Alex Rivera", status: "active", tier: "VIP", lastCheckIn: "10 mins ago", count: 12 },
  { id: "2", name: "Sarah Chen", status: "expired", tier: "Basic", lastCheckIn: "2 hours ago", count: 4 },
  { id: "3", name: "Marcus Johnson", status: "active", tier: "Premium", lastCheckIn: "Yesterday", count: 28 },
  { id: "4", name: "Emma Davis", status: "frozen", tier: "Basic", lastCheckIn: "3 days ago", count: 0 },
  { id: "5", name: "David Kim", status: "expired", tier: "Premium", lastCheckIn: "1 week ago", count: 15 }
];


**📋 Features to Implement***
1. ⏳ Simulated Database Sync (Loading State)
Upon launch, prevent the instant rendering of candidate profiles.

Display a distinct structural loader UI element (e.g., a rotating loading spinner or a text prompt stating "Syncing with Gym Database...").
Use standard asynchronous JavaScript browser timers to set a precise 1.5-second delay before wiping the loading UI and outputting the real dashboard.

2. 🎨 Dynamic UI Component Cards
Iterate across your dataset array and map each element into visual element cards within the container grid or flexbox.
Cards must render: Name, Membership Tier, Last Check-In Time, and a Total Attendance Count badge.
Status Badges: Implement clear CSS layout styles based on status values (e.g., Green for active, Red for expired, Amber/Gray for frozen).

3. 🔍 Compound Filter Logic & Search
Implement a real-time layout text search bar targeting names.
Implement three discrete filter buttons: "All", "Active Only", and "Expired Only".

Intersection Handling: Filters must evaluate in tandem. Activating the "Expired Only" selector while searching "Sarah" should filter accurately to that explicit compound state match. If an execution yields 0 array matches, substitute the UI card stack with a "No members match your criteria" element.

4. ⚡ Attendance Logging Action
Incorporate a native action button explicitly labeled "Check In" on every profile layout block.

If Account is Active: A click must update the underlying JavaScript object data inside your tracking array. Mutate lastCheckIn to "Just Now" and increment the total count by 1. The UI view layer must instantly refresh its specific node properties to print this mutation.

If Account is Expired/Frozen: Prevent mutation. Instead, safely append a temporary, elegant inline danger notice message directly onto that unique member's layout footprint stating: "Access Denied: Account Requires Attention".
