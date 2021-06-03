import React, { useState } from "react";
import { MultipleCustomApp } from "../examples/MultipleCustomApp";

import "../useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example</h1>
      <hr />

      {show && <MultipleCustomApp />}

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-success mt-5"
      >
        show/hide
      </button>
    </div>
  );
};
