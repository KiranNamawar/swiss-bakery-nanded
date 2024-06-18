import { MongoClient } from "mongodb";

const uri = process.env.MongoDB_URL || "mongodb://localhost:27017/";

export const client = new MongoClient(uri);

export const menuCollection = client.db("swiss-bakery-nanded").collection("menu");