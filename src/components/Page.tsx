import React from "react";

export default function Page({ children, variant = "" }: { children: React.ReactNode; variant?: string }) {
  return (
    <div className="main-wrapper" data-variant={variant}>
      {children}
    </div>
  );
}
