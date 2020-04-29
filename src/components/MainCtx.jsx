import React from 'react';
import { createContext } from 'react';
import useMainView from './hooks/useMainView';
const Ctx = createContext();
Ctx.displayName = 'TopContext';

export const CtxProvider = ({ children }) => {
  const topLevelHooks = useMainView();
  return <Ctx.Provider value={topLevelHooks}>{children}</Ctx.Provider>;
};

export default Ctx;
