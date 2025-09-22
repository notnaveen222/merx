import Image from "next/image";

export default function Badge() {
  return (
    <div className="px-3 py-1 border border-neutral-700/10 flex justify-center items-center gap-x-2 bg-zinc-200/50 text-sm mb-2 rounded-full mx-auto relative ">
      <span>Welcome to Merx</span>{" "}
      <Image
        src={"/icons/fire.svg"}
        alt="fire icon"
        width={16}
        height={16}
      ></Image>
    </div>
  );
}
