
import path from 'path';
import fs from 'fs/promises';

const readFontHelper = async (font: string) => {
  const fontPath = path.join(process.cwd(), 'public', 'fonts', font);

  const interSemiBold = await fs.readFile(fontPath);

  return interSemiBold
}

export default readFontHelper