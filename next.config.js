const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
    ],
  },
});
