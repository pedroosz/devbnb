import { IconType } from "react-icons";

interface Props {
  href: string;
  label: string;
  icon: IconType;
}

export default function CategoryLink(props: Props) {
  return (
    <a
      href={props.href}
      className="flex flex-col items-center justify-center h-full gap-1 text-xs text-center"
    >
      <props.icon className="w-6 h-6" />
      {props.label}
    </a>
  );
}
