import { createContext, useState, ReactNode } from "react";

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChanllenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChanllenge() {
    console.log("New challenge");
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChanllenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
