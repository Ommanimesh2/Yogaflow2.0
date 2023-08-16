import React from "react";
import { useState } from "react";

import dataContext from "./datacontext";

const ContextProvider = (props) => {
  const [orderedSession, setOrderedSession] = useState([]);
  return (
    <div>
      <dataContext.Provider value={{ orderedSession, setOrderedSession }}>
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default ContextProvider;
