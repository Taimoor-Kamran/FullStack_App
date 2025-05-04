import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <main className="auth-container">
    <section className="auth-form">
      <div className="auth-box">
        <Image src="" alt=""></Image>
      </div>
    </section>
  </main>;
};

export default layout;
