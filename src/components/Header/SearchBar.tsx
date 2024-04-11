import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";

interface SearchBarLinkProps {
  href: string;
  title: string;
  description: string;
  mode: "compact" | "full";
  className?: string;
}

function SearchBarLink(props: SearchBarLinkProps) {
  return (
    <a
      href={props.href}
      className={twMerge(
        "px-6 py-4 rounded-full hover:bg-neutral-200 group/search-bar-link",
        props.className
      )}
    >
      <h1 className="text-xs font-medium">{props.title}</h1>
      <p
        data-mode={props.mode}
        className="text-sm text-neutral-500 data-[mode=compact]:hidden"
      >
        {props.description}
      </p>
    </a>
  );
}

interface SearchBarProps {
  mode: "compact" | "full";
}

export default function SearchBar(props: SearchBarProps) {
  return match(props.mode)
    .with("compact", () => (
      <div className="flex items-center max-w-3xl mx-auto border rounded-full shadow-md border-neutral-300 shadow-neutral-300">
        <SearchBarLink
          href="#"
          title="Where"
          description="Search destinations"
          mode={props.mode}
          className="col-span-2 text-nowrap"
        />
        <SearchBarLink
          href="#"
          title="Check in"
          description="Add dates"
          mode={props.mode}
          className="col-span-1 text-nowrap"
        />
        <SearchBarLink
          href="#"
          title="Check out"
          description="Add dates"
          mode={props.mode}
          className="col-span-1 text-nowrap"
        />
        <SearchBarLink
          href="#"
          title="Who"
          description="Add guests"
          mode={props.mode}
          className="col-span-2 text-nowrap"
        />
      </div>
    ))
    .with("full", () => (
      <div className="grid items-center w-full grid-cols-6 mx-auto border rounded-full shadow-md md:max-w-4xl border-neutral-300 shadow-neutral-300">
        <SearchBarLink
          href="#"
          title="Where"
          description="Search destinations"
          mode={props.mode}
          className="col-span-2 text-nowrap"
        />
        <SearchBarLink
          href="#"
          title="Check in"
          description="Add dates"
          mode={props.mode}
          className="col-span-1 text-nowrap"
        />
        <SearchBarLink
          href="#"
          title="Check out"
          description="Add dates"
          mode={props.mode}
          className="col-span-1 text-nowrap"
        />
        <SearchBarLink
          href="#"
          title="Who"
          description="Add guests"
          mode={props.mode}
          className="col-span-2 text-nowrap"
        />
      </div>
    ))
    .exhaustive();
}
