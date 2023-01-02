import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://WilsonWann:vQMYHCvTUGjTUT5A@cluster0.njkxljd.mongodb.net/Next?retryWrites=true&w=majority"
  );
  return client;
}