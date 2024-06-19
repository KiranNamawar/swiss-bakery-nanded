import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../util/database"
import { MenuItem } from "../util/models";



const menuCollection = client.db("swiss-bakery-nanded").collection("menu");

async function getMenu() {
    try {
        await client.connect();
        return await menuCollection.find().toArray() as unknown as MenuItem[];
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const menu = await getMenu();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}