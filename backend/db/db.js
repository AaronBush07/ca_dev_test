const { newDb } = require("pg-mem");
const dummy = require("./mockData.json");
const pgp = require("pg-promise")();

const db = newDb();

try {
  const dbSchema = `
    CREATE TABLE ITEMS (id SERIAL PRIMARY KEY, item varchar)
`;
  //Create table in pg-mem
  db.public.none(dbSchema);
} catch (e) {
  console.log(e);
}

/**Populate fake database 
 * pg-promise is being used to format the values being used. If this task were to require
 * further inserts to the table, I would most likely continue using pg-promise to format the data
 * due to pg-mem wrappers not being reliable. 
*/
dummy.forEach(async (val) => {
  const queryText = pgp.as.format(
    `INSERT INTO ITEMS (id, item) VALUES ($1, $2)`,
    [val.id, val.item]
  );
  db.public.one(queryText);
});

module.exports = db;
