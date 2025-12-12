export const MOCK_USERS = [
  { id: "u1", name: "Asha Sharma", avatar: "AS", online: true },
  { id: "u2", name: "Vikram Singh", avatar: "VS", online: false, lastSeen: "2025-12-10 18:05" },
  { id: "u3", name: "Neha Patel", avatar: "NP", online: true },
  { id: "u4", name: "Rohan Mehta", avatar: "RM", online: false, lastSeen: "2025-12-09 10:11" },
];

export const MOCK_CONVERSATIONS = [
  {
    id: "c1",
    participants: ["me", "u1"],
    lastMessage: "Hey, are you joining today's call?",
    lastTime: "10:30 AM",
    unread: 2,
    messages: [
      { from: "u1", text: "Hey!", time: "10:00 AM" },
      { from: "me", text: "Hi Asha, how are you?", time: "10:05 AM" },
      { from: "u1", text: "I'm good. Are we meeting today?", time: "10:30 AM" },
    ],
  },
  {
    id: "c2",
    participants: ["me", "u3"],
    lastMessage: "Sent the files.",
    lastTime: "Yesterday",
    unread: 0,
    messages: [
      { from: "u3", text: "I'll send it by evening.", time: "Yesterday" },
      { from: "me", text: "Thanks!", time: "Yesterday" },
    ],
  },
];
