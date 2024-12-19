const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

console.log("variaveis no db.js: " + MONGO_HOST + " " + MONGO_DATABASE);
 
async function connect() {
    if (singleton) return singleton;
 
        const client = new MongoClient("mongodb+srv://aiorosdesagitario13:gVlfM6GLCB2MmJj5@cluster0.6b4io.mongodb.net/");
    
    await client.connect();
 
    singleton = client.db("Appturismo");
    //singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}
 
async function findAll(COLLECTION) {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}

async function findOne(COLLECTION,id) {
    
    const db = await connect();
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function findExpressao(filtro) {    

    const db = await connect();

    const expressaoregular = [];
    for (const chave in filtro) {
        expressaoregular[chave] = new RegExp(filtro[chave], "i");
      }
    
      console.log(expressaoregular);

    return db.collection("COLLECTION").find( { tags: { $all: expressaoregular } } ).toArray();    
        
}

async function insertDb(COLLECTION, item) {
    const db = await connect();
    return db.collection(COLLECTION).insertOne(item);
}

async function deleteDb(COLLECTION,id) {
    const db = await connect();
    return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

async function updateDb(COLLECTION,id, dados) {
    const db = await connect();
    delete dados._id;    
    return db.collection(COLLECTION).updateOne({ _id: new ObjectId(id) }, { $set: dados});
    
}

module.exports = { findAll, insertDb, findOne, deleteDb, updateDb }