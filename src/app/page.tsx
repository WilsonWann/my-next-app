import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-flow-row grid-cols-5 gap-2 *:flex *:min-h-24 *:min-w-24 *:items-center *:justify-center *:bg-purple-500">
      <div className="row-span-4 row-start-1">sidebar</div>
      <div className="col-span-4 col-start-2 row-span-4 row-start-1">
        content
      </div>
      {/* <div className="col-span-full row-start-4">footer</div> */}
    </div>
  );
}
