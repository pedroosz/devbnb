import { IRental } from "../../@types/rental";
import Card from "./Card";

export default function Root({ data }: { data: IRental[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 mb-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
}
