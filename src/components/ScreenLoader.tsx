import React from "react";

export default function ScreenLoader({
  children,
  loading,
  float,
}: {
  children: React.ReactNode;
  loading?: true | false;
  float?: true;
}) {
  return loading ? <div className={`preloader ${float ? "relative" : ""}`}>{children}</div> : null;
}
