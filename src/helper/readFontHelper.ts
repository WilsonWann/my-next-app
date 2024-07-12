
import { BASE_URL } from "@/lib/constants"

const readFontHelper = async (font: string) => {

  const interSemiBold = fetch(new URL(`/fonts/${font}`, BASE_URL))
    .then((res) => res.arrayBuffer())

  return interSemiBold
}

export default readFontHelper