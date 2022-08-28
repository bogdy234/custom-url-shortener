const { Url } = require("../url/url");

const RedirectService = {
  redirectFunction: async (item) => {
    const { newUrl } = item;
    const result = await Url.findOne({ newUrl });
    if (result) {
      return result.oldUrl;
    }
    const error = Error("Redirect not found");
    error.status = 404;
    throw error;
  },
};

module.exports = RedirectService;
