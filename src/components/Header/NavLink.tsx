import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink(props: Props) {
  const isActive = props.href === window.location.pathname;
  const activeStyle = match(isActive)
    .with(true, () => "font-medium text-neutral-950")
    .with(false, () => "font-light text-neutral-500")
    .exhaustive();

  return (
    <a
      href={props.href}
      className={twMerge(
        "rounded-full hover:bg-neutral-100 px-4 py-2",
        activeStyle
      )}
    >
      {props.children}
    </a>
  );
}
