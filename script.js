/**
 * GYM RECEPTION DISK MANAGEMENT SYSTEM - STARTER CODE
 * * Instructions:
 * 1. Implement the 1.5s simulated database loading state.
 * 2. Render the gymMembers array into dynamic UI cards.
 * 3. Implement real-time search and compound filtering (All/Active/Expired).
 * 4. Handle the "Check In" action logic and data mutation.
 */

// 💾 Core Dataset
const gymMembers = [
    { id: "1", name: "Alex Rivera", status: "active", tier: "VIP", lastCheckIn: "10 mins ago", count: 12 },
    { id: "2", name: "Sarah Chen", status: "expired", tier: "Basic", lastCheckIn: "2 hours ago", count: 4 },
    { id: "3", name: "Marcus Johnson", status: "active", tier: "Premium", lastCheckIn: "Yesterday", count: 28 },
    { id: "4", name: "Emma Davis", status: "frozen", tier: "Basic", lastCheckIn: "3 days ago", count: 0 },
    { id: "5", name: "David Kim", status: "expired", tier: "Premium", lastCheckIn: "1 week ago", count: 15 }
];

// --- YOUR CODE STARTS HERE ---

/**
 * Task 1: Database Sync Simulation
 * TODO: Create a function that runs on page load, shows a spinner/message, 
 * and waits 1.5 seconds before calling the render function.
 */

/**
 * Task 2 & 3: UI Rendering & Filtering
 * TODO: Target the DOM container and map the 'gymMembers' to HTML cards.
 * Ensure search and status filters work together (intersection handling).
 */

/**
 * Task 4: Attendance Logging
 * TODO: Create a function to handle "Check In" clicks.
 * Update 'lastCheckIn' and 'count' for active members only.
 */

console.log("Gym System Data Loaded:", gymMembers);
