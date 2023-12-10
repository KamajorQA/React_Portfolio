import React, { createContext, useState } from 'react';

const CursorContext = createContext({
  cursorBallHidden: false,
  switchCursorBallHidden: () => {},
});

const CursorContextProvider = ({ children }) => {
  const [cursorBallHidden, setCursorBallHidden] = useState(false);
  const switchCursorBallHidden = () => setCursorBallHidden((prev) => !prev);

  return (
    <CursorContext.Provider
      value={{
        cursorBallHidden,
        switchCursorBallHidden,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export { CursorContext, CursorContextProvider };
