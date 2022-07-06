import styled from "styled-components";
import Button from "./Button";

export default function Player({
  name,
  score,
  onDecreasePlayerScore,
  onIncreasePlayerScore
}) {
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore>
        <Button aria-label="Decrease Score" onClick={onDecreasePlayerScore}>
          -
        </Button>
        <span>{score}</span>
        <Button aria-label="Increase Score" onClick={onIncreasePlayerScore}>
          +
        </Button>
      </PlayerScore>
    </PlayerWrapper>
  );
}

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PlayerScore = styled.div`
  color: black;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;
