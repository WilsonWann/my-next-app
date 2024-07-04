import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
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
    </>
  )
}