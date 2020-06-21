module.exports = {
  get: (endpoint) => {
    if (endpoint === "/messages") {
      return Promise.resolve({
        data: [
          {
            createdAt: "2020-06-21T10:12:02.735Z",
            userName: "Apollo",
            message: "Doesn’t make a lot of sense, does it?",
          },
          {
            createdAt: "2020-06-21T10:13:01.049Z",
            userName: "Starbuck",
            message:
              "You should hear the way my brain works sometimes. Are we okay?",
          },
          {
            createdAt: "2020-06-21T10:13:34.875Z",
            userName: "Apollo",
            message: "You have a brain?",
          },
          {
            createdAt: "2020-06-21T10:15:35.166Z",
            userName: "Apollo",
            message: "So, what’s the charge this time?",
          },
          {
            createdAt: "2020-06-21T10:15:42.166Z",
            userName: "Starbuck",
            message: "Striking a superior asshole.",
          },
          {
            createdAt: "2020-06-21T10:16:13.931Z",
            userName: "Apollo",
            message: "And I bet you’ve been waiting all day to say that one.",
          },
          {
            createdAt: "2020-06-21T10:16:27.041Z",
            userName: "Starbuck",
            message: "Most of the afternoon, yeah.",
          },
          {
            createdAt: "2020-06-21T10:17:19.631Z",
            userName: "Adama",
            message: "Morning Starbuck. What do you hear?",
          },
          {
            createdAt: "2020-06-21T10:17:39.058Z",
            userName: "Starbuck",
            message: "Nothin’ but the rain, sir.",
          },
          {
            createdAt: "2020-06-21T10:18:00.345Z",
            userName: "Adama",
            message: "Grab your gun and bring the cat in.",
          },
          {
            createdAt: "2020-06-21T10:18:22.045Z",
            userName: "Starbuck",
            message: "Boom boom boom",
          },
        ],
      })
    }
    return new Error("Erreur 404")
  },
}
