'use server'

import axios from "axios";

type PortfolioCaseType = {
  name: string
  title: string
  tags: string[]
  images: string[]
}

type ResponseType<T> = SuccessResponseType<T> | ErrorResponseType

type SuccessResponseType<T> = {
  success: true
  data: T
}

type ErrorResponseType = {
  success: false
  message: string
}

export async function getPortfolioCaseByName(portfolioCase: string): Promise<ResponseType<PortfolioCaseType | undefined>> {

  try {
    const response = await axios.get<PortfolioCaseType[]>(`http://localhost:3500/portfolioCase?name=${portfolioCase}`);


    if (response.status === 200) {
      const data = response.data.at(0);
      return { success: true, data }
    } else {
      return { success: false, message: 'Something went wrong.' }
    }
  } catch (error) {
    console.error('Error fetching portfolio case:', error);
    return { success: false, message: 'Server error.' }
  }
}