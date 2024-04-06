import { USERS } from "./data";

export const POSTS = [
  {
    imageUrl: 
    "https://images.unsplash.com/photo-1712100596750-f5a184222206?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    User: USERS[0].name,
    likes: 7870,
    caption: "Welcome to the view.❤️😍",
    profile_picture: USERS[0].image,
    Comments: [
      {
        user: "Qazi",
        comment: "Wow Amazing, when we are going💫⭐",
      },
      {
        user: "Shiva",
        comment: "Yeah so Excited.😁💕",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1712100596750-f5a184222206?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    User: USERS[1].name,
    likes: 3500,
    caption: "how's it❤️😍",
    profile_picture: USERS[1].image,
    Comments: [
      {
        user: "Qazi",
        comment: "Wow Amazing💫⭐",
      },
      {
        user: "Shiva",
        comment: "Nice💕",
      },
    ],
  },
];
