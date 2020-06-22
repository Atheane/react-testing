module.exports = {
  get: (endpoint) => {
    if (endpoint === "/messages") {
      return Promise.resolve({
        data: [
          {
            createdAt: "2020-06-21T10:12:02.735Z",
            userName: "Apollo",
            messageText: "Doesn’t make a lot of sense, does it?",
          },
          {
            createdAt: "2020-06-21T10:13:01.049Z",
            userName: "Starbuck",
            messageText:
              "You should hear the way my brain works sometimes. Are we okay?",
          },
          {
            createdAt: "2020-06-21T10:13:34.875Z",
            userName: "Apollo",
            messageText: "You have a brain?",
          },
          {
            createdAt: "2020-06-21T10:15:35.166Z",
            userName: "Apollo",
            messageText: "So, what’s the charge this time?",
          },
          {
            createdAt: "2020-06-21T10:15:42.166Z",
            userName: "Starbuck",
            messageText: "Striking a superior asshole.",
          },
          {
            createdAt: "2020-06-21T10:16:13.931Z",
            userName: "Apollo",
            messageText:
              "And I bet you’ve been waiting all day to say that one.",
          },
          {
            createdAt: "2020-06-21T10:16:27.041Z",
            userName: "Starbuck",
            messageText: "Most of the afternoon, yeah.",
          },
          {
            createdAt: "2020-06-21T10:17:19.631Z",
            userName: "Adama",
            messageText: "Morning Starbuck. What do you hear?",
          },
          {
            createdAt: "2020-06-21T10:17:39.058Z",
            userName: "Starbuck",
            messageText: "Nothin’ but the rain, sir.",
          },
          {
            createdAt: "2020-06-21T10:18:00.345Z",
            userName: "Adama",
            messageText: "Grab your gun and bring the cat in.",
          },
          {
            createdAt: "2020-06-21T10:18:22.045Z",
            userName: "Starbuck",
            messageText: "Boom boom boom",
          },
        ],
      })
    }
    return new Error("Erreur 404")
  },
  post: (endpoint, data) => {
    if (endpoint === "/message") {
      return Promise.resolve({
        data: {
          message: {
            ...data,
          },
        },
      })
    }
    return new Error("Erreur 404")
  },
}
