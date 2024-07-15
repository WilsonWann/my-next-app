import { LoaderCircle } from "lucide-react"

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute h-full w-full bg-white opacity-60" />
      <div className="relative h-full w-full display flex justify-center items-center">
        <LoaderCircle className={"animate-spin"} />
      </div>
    </div>
  )
}
export default Loading