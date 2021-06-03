import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me llamaste");
  return <small>{value}</small>;
});
