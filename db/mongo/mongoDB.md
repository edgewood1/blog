**MONGO STARTER**

https://docs.mongodb.com/manual/reference/mongo-shell/#mongo-shell-command-history

**START SERVER**
mongod

**OPEN NEW TERMINAL TO USE SHELL (EXPOSES `>` THAT ALLOWS FOR MONGO COMMANDS):**
mongo

**SEE DATABASES**
show dbs

**WHAT DATABASE AM I IN?**
db

**CREATE/USE DATABASE**
use whateverName

**SEE TABLES (COLLECTIONS)**
show collections

**CREATE**
db.tables.insert({name: "joe", city: "durham"})

db.collection.save()¶
Updates an existing document or inserts a new document, depending on its document parameter.

**READ**
db.tables.find()

db.places.find({"continent": "Africa"})

**UPDATE (item / array)**
db.places.update({"country": "Morocco"}, {\$set: {"capital": "RABAT"}})

db.places.update({"country": "Morocco"}, {\$push: {"majorcities": "Agadir"}})

**DELETE**
db.places.update({"country": "Morocco"}, {\$unset: {"capital": "RABAT"}})

db.places.update({"country": "Morocco"}, {\$pull: {"majorcities": "Agadir"}})

db.places.remove({"country": "Morocco"})

# Sorting Results

- The format of a sort follows `db.COLLECTION_NAME.find().sort({FIELD:1})`

  - A value of `1` is for ascending order.
  - A value of `-1` is for descending order.

db.animals.find().sort({ \_id:1 });
db.animals.find().sort({ \_id:-1 });
