const UrlModel = require("../models/url");

const RedirectService = {
    redirectFunction: async (item, success, fail) => {
        const { newUrl } = item;
        try {
            const result = await UrlModel.findOne({ newUrl });
            if (result._id) {
                success(result.oldUrl);
            }
        } catch (err) {
            fail(err);
        }
    },
};

module.exports = RedirectService;
