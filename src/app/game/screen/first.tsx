import { useGameState } from "../state-utils";
import Header from "../components/header";

export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
    </div>
  );
}
