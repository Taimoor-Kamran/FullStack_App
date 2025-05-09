import Header from "@/components/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header />
      </div>
      <div className="mt-20 pb-20">{children}</div>
    </main>
  );
};

export default layout;
