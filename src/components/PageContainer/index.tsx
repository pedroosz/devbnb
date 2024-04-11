import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen p-4">
      <div className="w-full h-full max-w-screen-xl mx-auto">{children}</div>
    </main>
  );
}
