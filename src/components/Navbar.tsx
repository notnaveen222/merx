export default function Navbar() {
  return (
    <div className="w-screen flex justify-between fixed top-0 px-7 items-center h-16">
      <div className="tracking-wider font-semibold text-lg">MERX</div>
      <div className="flex gap-x-7 tracking-wider">
        <div className="cursor-pointer font-medium">Home</div>
        <div className="cursor-pointer font-medium">Dashboard</div>
        <div className="cursor-pointer font-medium">Marketplace</div>
      </div>
    </div>
  );
}
