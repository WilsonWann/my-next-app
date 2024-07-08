
import * as fs from 'fs';
import * as path from 'path';
import { kv } from '@vercel/kv'

const filePath = path.join(path.resolve(__dirname, '../../../../'), 'data/portfolioCase.json');

const uploadData = async () => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const pipeline = kv.pipeline()
  for (const item of data.portfolioCase) {
    console.log('🚀 ~ uploadData ~ item:', item)
    console.log('🚀 ~ uploadData ~ item.name:', item.name)
    pipeline.hset(`portfolio:name:${item.name}`, item);
  }

  await pipeline.exec();

  console.log('Data uploaded successfully!');
};

uploadData().catch((error) => {
  console.error('Error uploading data:', error);
});
