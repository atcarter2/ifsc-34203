// NPC data (you will fill this in)
const npcs = {
  1: { name: "NPC 1", bio: "Bio for NPC 1" },
  2: { name: "NPC 2", bio: "Bio for NPC 2" },
  3: { name: "NPC 3", bio: "Bio for NPC 3" },
  4: { name: "NPC 4", bio: "Bio for NPC 4" },
  5: { name: "NPC 5", bio: "Bio for NPC 5" },
  6: { name: "NPC 6", bio: "Bio for NPC 6" },
  7: { name: "NPC 7", bio: "Bio for NPC 7" },
  8: { name: "NPC 8", bio: "Bio for NPC 8" },
  9: { name: "NPC 9", bio: "Bio for NPC 9" },
  10: { name: "NPC 10", bio: "Bio for NPC 10" },
  11: { name: "NPC 11", bio: "Bio for NPC 11" },
  12: { name: "NPC 12", bio: "Bio for NPC 12" },
  13: { name: "NPC 13", bio: "Bio for NPC 13" },
  14: { name: "NPC 14", bio: "Bio for NPC 14" },
  15: { name: "NPC 15", bio: "Bio for NPC 15" },
  16: { name: "NPC 16", bio: "Bio for NPC 16" },
  17: { name: "NPC 17", bio: "Bio for NPC 17" },
  18: { name: "NPC 18", bio: "Bio for NPC 18" },
  19: { name: "NPC 19", bio: "Bio for NPC 19" },
  20: { name: "NPC 20", bio: "Bio for NPC 20" },
};

// Button click
document.getElementById("generate-btn").addEventListener("click", function () {
  // Random number 1–20
  const roll = Math.floor(Math.random() * 20) + 1;

  // Get NPC
  const npc = npcs[roll];

  // Update HTML
  document.getElementById("npc-name").textContent =
    npc.name + " (Roll: " + roll + ")";
  document.getElementById("npc-bio").textContent = npc.bio;
});
