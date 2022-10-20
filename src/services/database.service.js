//const MockDatabaseService = require("./class.mock.database.service");
const DynamoDatabaseService = require("./class.dynamodb.database.service");
let db;
//db = new MockDatabaseService();
db = new DynamoDatabaseService();
module.exports = db;