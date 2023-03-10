import React from "react";

export default function ScreenLoader({ children, loading }: { children: React.ReactNode; loading: true | false }) {
  return loading ? <div className="preloader">{children}</div> : null;
}
