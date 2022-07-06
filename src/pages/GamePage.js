import Button from "../components/Button";
import Player from "../components/Player";

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onEndGame,
  onDecreasePlayerScore,
  onIncreasePlayerScore
}) {
  return (
    <>
      <header>
        <p>Successfully created a new game!</p>
        <h2>{nameOfGame}</h2>
      </header>
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onIncreasePlayerScore={() => onIncreasePlayerScore(index)}
          onDecreasePlayerScore={() => onDecreasePlayerScore(index)}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </>
  );
}
