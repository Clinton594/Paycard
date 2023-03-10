import React from "react";

export default function Render({ jsx, props = {} }: any) {
  return React.createElement(jsx, props);
}
