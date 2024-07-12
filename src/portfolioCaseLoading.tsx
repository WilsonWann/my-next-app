import { Skeleton } from "@/components/ui/skeleton"
import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0">
        <div className="relative xl:mt-16 mt-[100px] xl:px-1 px-8 overflow-x-clip bg-transparent">
          <div className="max-w-3xl mx-auto pt-16 flex flex-col justify-start items-start gap-8">
            <section className={`flex flex-col justify-start items-start gap-6 text-secondary`}>
              <Skeleton className="h-3 w-20"></Skeleton>
              <Skeleton className="h-3 w-8"></Skeleton>
              <Skeleton className="h-3 w-8"></Skeleton>
              <Skeleton className="h-3 w-8"></Skeleton>
            </section>
            <Skeleton className="w-full h-[500px]"></Skeleton>
            <Skeleton className="w-full h-[500px]"></Skeleton>
            <Skeleton className="w-full h-[500px]"></Skeleton>
            <Skeleton className="w-full h-[500px]"></Skeleton>
          </div>
        </div>
        <div className="absolute h-full w-full bg-white opacity-60" />
        <div className="relative h-full w-full display flex justify-center items-center">
          <LoaderCircle className={"animate-spin"} />
        </div>

      </div>
    </>
  )
}