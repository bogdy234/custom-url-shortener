const express = require("express");
const UrlService = require("../services/url");
const urlRouter = express.Router();

const createUrl = (req, res) => {
    const { oldUrl, newUrl } = req.body;

    UrlService.create(
        { oldUrl, newUrl },
        (result) => res.status(201).json(result),
        (err) => res.status(409).json(err.message)
    );
};

const readUrl = (req, res) => {};

const deleteUrl = (req, res) => {};

urlRouter.route("").post(createUrl);
urlRouter.route("").get(readUrl);
urlRouter.route("").delete(deleteUrl);

module.exports = urlRouter;
