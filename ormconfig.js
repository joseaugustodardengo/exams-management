console.log("process.env.DATABASE_URL -->", process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/src/models/*.ts"
  ],
  "migrations": [
    "dist/src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entitiesDir": "./src/models"
  }
}