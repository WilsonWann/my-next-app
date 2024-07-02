import redis from './redis'

type PortfolioCaseType = {
  name: string
  title: string
  tags: string[]
  images: string[]
}

async function checkData() {
  try {
    const data = await redis.get(`portfolioCase:rings`);

    if (data) {
      const portfolioCaseData: PortfolioCaseType = JSON.parse(data);
      return { success: true, data: portfolioCaseData }
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

