import { kv } from '@vercel/kv'

const keys = [
  "rings",
  "necklace",
  "jewelry",
  "bracelet",
  "earrings",
  "watch",
]
async function deleteData() {
  try {
    const pipeline = kv.pipeline();

    for (const key of keys) {
      pipeline.del(`portfolio:name:${key}`);
    }
    const data = await pipeline.exec();

    if (data) {
      return { success: true, data: data }
    } else {
      return { success: false, message: 'Something went wrong.' }
    }
  } catch (error) {
    console.error('Error fetching portfolio case:', error);
    return { success: false, message: 'Server error.' }
  }
}
const main = async () => {

  const result = await deleteData();
  console.log('🚀 ~ main ~ result:', result)

}
main();

