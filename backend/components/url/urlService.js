const { Url, validate } = require("./url");

const UrlService = {
  create: async (item) => {
    const { error } = validate(item);

    if (error) {
      const err = Error(error.details[0].message);
      err.status = 400;
      throw err;
    }

    const { newUrl } = item;
    const url = await Url.findOne({ newUrl });

    if (url) {
      const err = Error("New url already exists");
      err.status = 409;
      throw err;
    }

    const result = await Url.create({
      ...item,
      expirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return result;
  },
};

module.exports = UrlService;
