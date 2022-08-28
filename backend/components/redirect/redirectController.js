const express = require("express");
const RedirectService = require("./redirectService");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.get(
  "/:newUrl",
  asyncMiddleware(async (req, res) => {
    const data = await RedirectService.redirectFunction(req.params);

    return res.redirect(`${data}`);
  })
);

// redirectRouter.route("/:newUrl").get(redirect);

module.exports = router;
