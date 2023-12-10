import { PropsWithChildren, createContext, useRef, useEffect, useState, ReactNode } from "react";
import { ProgressPercent } from "./progress-percent";

interface ProgressBarContextType {
  progressPercent : ProgressPercent;
  previousProgressPercent : ProgressPercent;
}

type ProgressBarContextProps = {
  progressPercent : ProgressPercent,
  children : ReactNode
}

export const ProgressBarContext = createContext<ProgressBarContextType | null>(null);

export function ProgressBarContextProvider({ progressPercent, children } : ProgressBarContextProps) {
  const [ state, setState ] = useState<ProgressBarContextType>({
    progressPercent,
    previousProgressPercent : progressPercent
  });

  const progressPercentRef = useRef(progressPercent);

  useEffect(() => {
    setState({
      progressPercent : progressPercent,
      previousProgressPercent : progressPercentRef.current
    });
    progressPercentRef.current = progressPercent;
  }, [progressPercent])

  return (
    <ProgressBarContext.Provider value={state}>{children}</ProgressBarContext.Provider>
  );
}