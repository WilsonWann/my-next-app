import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connectToDatabase();

  const tagCollection = client.db().collection("tags");

  const tags = await tagCollection.find({}).toArray();

  res.status(200).send(tags);
}
