import { useRef, useState } from "react";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { useDebounceCallback, useEventListener } from "usehooks-ts";
import CategoryLink from "./CategoryLink";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrollPosY, setScrollPosY] = useState(window.scrollY);

  const onScroll = (_ev: Event) => {
    if (!headerRef.current) return;
    setScrollPosY(window.scrollY);
  };

  useEventListener("scroll", useDebounceCallback(onScroll, 250));

  return (
    <header ref={headerRef} className="sticky top-0 z-10 bg-white">
      <div className="hidden p-4 space-y-4 border-b md:block border-neutral-200">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold text-rose-500">Devbnb</h1>

          <div data-show={scrollPosY == 0} className="data-[show=true]:hidden ">
            <SearchBar mode="compact" />
          </div>

          <nav
            data-show={scrollPosY == 0}
            className="flex items-center gap-4 data-[show=false]:hidden"
          >
            <NavLink href="#">Stays</NavLink>
            <NavLink href="#">Experiences</NavLink>
            <NavLink href="#">Online Experiences</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <NavLink href="#">Rent your house</NavLink>
          </div>
        </div>

        <div data-show={scrollPosY == 0} className="data-[show=false]:hidden">
          <SearchBar mode="full" />
        </div>
      </div>

      <div className="p-4 shadow">
        <div className="flex items-center w-full gap-8 mx-auto overflow-x-auto max-w-7xl">
          <CategoryLink href="#" label={"All"} icon={FaUmbrellaBeach} />
        </div>
      </div>
    </header>
  );
}
