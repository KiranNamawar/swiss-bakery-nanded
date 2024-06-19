'use server'
import { MongoClient } from "mongodb";
import { MenuItem } from "./models";

const uri = process.env.MongoDB_URL || "mongodb://localhost:27017/";
console.log(uri);

export const client = new MongoClient(uri);