import { kv } from '@vercel/kv'

async function checkData() {
  try {
    const data = await kv.hgetall(`portfolio:name:rings`);

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

  const result = await checkData();
  console.log('🚀 ~ main ~ result:', result)

}
main();

