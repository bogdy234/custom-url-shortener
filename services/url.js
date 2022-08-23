const UrlModel = require("../models/url");

const UrlService = {
    create: async (item, success, fail) => {
        try {
            const { newUrl } = item;
            const urls = await UrlModel.find({ newUrl });

            if (urls.length) {
                return fail(new Error("New url already exists"));
            }

            const result = await UrlModel.create({
                ...item,
                expirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
            });

            return success(result);
        } catch (err) {
            return fail(err);
        }
    },
};

module.exports = UrlService;
