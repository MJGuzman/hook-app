import React, { useEffect } from "react";

export const MessageApp = () => {
  useEffect(() => {
    console.log("componente montado");
    return () => {
      console.log("componente desmontado");
    };
  }, []);
  return (
    <div>
      <h2>Eres grande parcero!</h2>
    </div>
  );
};
