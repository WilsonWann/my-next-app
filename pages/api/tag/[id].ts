import {  NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tagID = req.query.id as string;
  const client = await connectToDatabase();
  const tagCollection = client.db().collection("tags");

  const tag = await tagCollection.findOne({ id: parseInt(tagID) });

  res.status(200).send(tag);
}
