const express = require("express");
const UrlService = require("./urlService");
const router = express.Router();
const asyncMiddleware = require("../../middleware/async");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const result = await UrlService.create(req.body);

    return res.send(result);
  })
);

// const readUrl = (req, res) => {};

// const deleteUrl = (req, res) => {};

module.exports = router;
