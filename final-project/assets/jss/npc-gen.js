// NPC data (you will fill this in)
const npcs = {
  1: {
    name: "The Rockmancer",
    bio: "A specialized wizard that can only be controlled by a DM. They are immune to all spells and damage. They know only one spell; the always fatal “Rocks Fall Everybody Dies”. The Rockmancer always has the last word.",
  },
  2: {
    name: "Gloin",
    bio: "Called the Hammer-Fist. This monk of Moradin All-Hammer is renowned for the work he does with his hands. Sometimes that’s smithing white hot steel with his bare hands or devasting punches in the fighting ring. Beware Gloin lest you get Hammer Fisted!",
  },
  3: {
    name: "Stank-Eyed Franklin",
    bio: "Bug eyed and twitchy this criminal has been on the run as long as he can remember. More idiot always in the wrong place at the wrong time than malicious. Lady Luck seems to enjoy toying with him as bad as his luck is he always manages to get away.",
  },
  4: {
    name: "Cassio Pavlo ",
    bio: "A member of the Golden Grin. At first this jovial portly friendly man seems nothing more than a chatterbox, that is until you realized you’ve spilled most of your deepest held secrets. Cassio is one of the most effective spies of the Golden Grin as he seeks out the information he needs to combat the evils facing Tal Dorei.",
  },
  5: {
    name: "Oda Zystra",
    bio: "Rogue Mage and Dunamancer. Oda betrayed the Krynn Dynasty stealing one of their most sacred tomes on the rare magic Dunamancy. Offering his services to the highest bidder this arrogant mage is an expert in the magic of chance and chaos.",
  },
  6: {
    name: "Lys Duciel",
    bio: "A eccentric druid Lys hailing from the Feywild. More recently he’s been seen amongst the icy forests around Ten Towns to the north. Often consulted for his ability to interpret stars or occasionally his ability to blast away nuissances. ",
  },
  7: {
    name: "Fungalore",
    bio: "The Shitake Sorcerer! The Funky Fungus Wizard! Fungalore the Mushroom Wizard bends the mind and reality itself with their magically warped mushroom spores. One of the most deadly mercenaries around. Be careful what you eat!",
  },
  8: {
    name: "Scud",
    bio: "The owner and operator of Scud’s; one of the dingiest narliest dive bars in Drynna. Legend says he keeps a wand of fireball behind the bar in case of trouble. To be honest nobody wants to find out!",
  },
  9: {
    name: "Mrs. Higginhop",
    bio: "The most renowned and sought after cook in the Feywild. This anthropomorphic frog maid has truly mastered cooking and especially baking. Though be careful her cake creations are so lifelike they frequently fool people who then found the object or person they interact with turns out to be nothing more than flour, butter, and sugar!",
  },
  10: {
    name: "Aldric Keingeld",
    bio: "An infamous mercenary captain called “The Wolf of the Sword Coast”. His brutal tactics gaining such notoriety enemies surrender rather than fight him. Known as much for the enormous zweihander sword he carries as his glorious mustache.",
  },
  11: {
    name: "Belvis Nibblequipper",
    bio: "A whopping 5 1/2 feet tall for a halfling would be impressive, but even more impressive when you see almost 2 feet of Belvis is her enormous beehive hairdo! A southern belle with charm as big as her hair! She runs a tidy general store that sells different cobblers as well. Y’all come back now ya-hear!",
  },
  12: {
    name: "Hareth Val Bardo",
    bio: "Entitled to say the least. Hareth has a chip on his shoulder almost as big as the farmland and riches he believes he’s owed. Third in line for the Val Bardo estate he’s convinced other’s plot against him, blaming his numerous failures on anyone but himself. This incompetent conspirator will stop at nothing to get what he believes is rightfully his.",
  },
  13: {
    name: "Arcius",
    bio: "Old. Like real dang old! But don’t be fooled; Arcius is a powerful Archdruid and one of the highest ranked acolytes of the Nature Goddess Melora. Quirky like someone who’s lived in the woods too long, just give him some candy and a good story and he’ll aid you.",
  },
  14: {
    name: "Vanion Rose",
    bio: "Lord Vanion Rose commands the elite fighting force called Thorn’s Company. The cities of Tal Dorei often compete for his tactical genius, as his army often decides whether a campaign is successful or not. His charm isn’t lost either on the courts as nobles offer countless marriage proposals. ",
  },
  15: {
    name: "Tulip",
    bio: "Not much is known of the Myriad member code named Tulip. What is known is her poisons and venoms have been the end of many. Beware should you ever become another job for this assassin.",
  },
  16: {
    name: "Circia",
    bio: "Called the Grey Witch by most and the Grey Bitch by those who are brave or stupid. A mysterious woman who resides in the Ivyheart Thicket. Anyone who enters her woods survives on her behest. No one has met or seen the witch in decades, or at least none that survived!",
  },
  17: {
    name: "Adrianna Labeau",
    bio: "This no BS detective always gets to the truth eventually. A hard exterior though gives way to good inent, Detective Labeau just might be one of the only legit officers left in this corrupt city. Make her an ally and she’ll always have your back, make her an enemy and you better watch yours!",
  },
  18: {
    name: "Everrette",
    bio: "A cleric of Pelor, this golden curled youth has only just taken up adventuring. A bit new to the world outside his holy order he may be naïve but he’s determined to make a real difference. Always quick to heal and help those in need, his kind heart serves him and his companions well. ",
  },
  19: {
    name: "Drilo",
    bio: "A mighty champion of the fighting pits! Called Drilo the Thrilo this enormous crocodile man has made a name for himself in the arena and outside it with recent adventures. The only thing this mountain of scales and muscle likes more than a good scrap is eating; specifically ice cream lactose intolerance be damned!",
  },
  20: {
    name: "Boblin",
    bio: "The gobbiest of Goblins! Boblin is the bestest companion any adventurer can ask for. He may not be strong, or fast, or very smart but he’s loyal! And his big ol’ ears pick up a lot! If a can-do attitude is a power than Boblin the Goblin has it in spades! Listen he’s trying his best ok!",
  },
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
