import Badge from "@/components/hero/Badge";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center mt-52">
      <Badge />
      <div className="text-7xl font-semibold w-[720px] text-center leading-20 mb-4">
        Start Selling Online Without Any Hassle.
      </div>
      <div className="text-black/80">
        Get your own link, list products, and start selling. No coding, no setup
        fees.
      </div>
    </div>
  );
}
