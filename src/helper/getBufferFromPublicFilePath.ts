'use server'

import { BufferWithSrc } from "@/types";
import fs from "fs/promises";

export default async function getBufferFromPublicFilePath(filePath: string): Promise<BufferWithSrc> {
  const src = filePath.replace("public", "").replace(/\\/g, "/")
  const buffer = await fs.readFile(filePath);

  return {
    src,
    buffer
  }
};