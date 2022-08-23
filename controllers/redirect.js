const express = require("express");
const RedirectService = require("../services/redirect");
const redirectRouter = express.Router();

const redirect = (req, res) => {
    RedirectService.redirectFunction(
        req.params,
        (data) => res.redirect(`https://${data}`),
        (err) => res.status(500).send(err)
    );
};

redirectRouter.route("/:newUrl").get(redirect);

module.exports = redirectRouter;
