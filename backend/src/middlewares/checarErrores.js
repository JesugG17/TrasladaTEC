const { response } = require("express");
const { validationResult } = require("express-validator");
const { httpStatusCode } = require("httpstatuscode");

const checarErrores = (req, res = response, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(httpStatusCode.BadRequest).json({
            ok: false,
            ...errors
        })
    }

    next();
}

module.exports = {
    checarErrores
}