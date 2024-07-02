
import * as fs from 'fs';
import * as path from 'path';
import redis from './redis';

const filePath = path.join(path.resolve(__dirname, '../../'), 'data/portfolioCase.json');

const uploadData = async () => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const item of data.portfolioCase) {
    const result = await redis.set(`portfolioCase:${item.name}`, JSON.stringify(item));
    console.log('🚀 ~ uploadData ~ result:', result)
  }

  console.log('Data uploaded successfully!');
};

uploadData().catch((error) => {
  console.error('Error uploading data:', error);
});
