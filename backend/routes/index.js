const express = require("express");
const router = express.Router();
const pgp = require("pg-promise")();


const db = require("../db/db.js");

/* GET home page. */
router.get("/items", function (req, res, next) {
  try {
    if (req.query.search === undefined) {
      res.status(400).send('Bad Request');
    } else {
      const { search } = req.query;
      const queryText = pgp.as.format(`SELECT * FROM ITEMS WHERE UPPER(item) LIKE '%'||$1||'%'`,
      [search.toUpperCase()])
      const results = db.public.many(queryText);
      res.status(200).send(results)
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
