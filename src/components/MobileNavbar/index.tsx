import {
  HiMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineUserCircle,
} from "react-icons/hi2";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 flex justify-center w-full gap-12 py-3 bg-white border-t md:hidden border-t-neutral-200">
      <a
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-center text-rose-500"
      >
        <HiMagnifyingGlass className="w-6 h-6" />
        <p className="text-[10px] font-light">Home</p>
      </a>

      <a
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-center text-neutral-600"
      >
        <HiOutlineHeart className="w-6 h-6" />
        <p className="text-[10px] font-light">Wishlists</p>
      </a>

      <a
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-center text-neutral-600"
      >
        <HiOutlineUserCircle className="w-6 h-6" />
        <p className="text-[10px] font-light">Log In</p>
      </a>
    </div>
  );
}
