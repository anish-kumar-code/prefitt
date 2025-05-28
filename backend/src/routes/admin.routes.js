const express = require('express');

const router = express.Router();

router.get("/test", (req, res) => {
    res.status(200).json({ message: "this is admin test route" });
})

module.exports = router;