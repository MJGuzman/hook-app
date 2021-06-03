import React from "react";

import "../useEffect/effects.css";

const handleFocus = () => {
  document.getElementById("name").select();
};

export const FocusScreen = () => {
  return (
    <div>
      <h1>Focus screen</h1>
      <hr />

      <input id="name" className="form-control mb-3" placeholder="name" />
      <button onClick={handleFocus} className="btn btn-primary">
        Focus
      </button>
    </div>
  );
};
