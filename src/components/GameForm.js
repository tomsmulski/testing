import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

export default function GameForm({ onCreateGame }) {
  const [nameOfGame, setNameOfGame] = useState("");
  const [playerNames, setPlayerNames] = useState("");

  const disabled = nameOfGame === "" || playerNames === "";

  return (
    <Form
      aria-labelledby="formHeader"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 id="formHeader">Create a new game</h2>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Dodelido"
        onChange={(event) => setNameOfGame(event.target.value)}
        value={nameOfGame}
        required
      />
      <Input
        name="playerNames"
        labelText="Player names, seperated by comma"
        placeholder="e.g. John Doe, Jane Doe"
        onChange={(event) => setPlayerNames(event.target.value)}
        value={playerNames}
        required
      />
      <Button disabled={disabled}>Create game</Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame({
      nameOfGame,
      playerNames: playerNames.split(",").map((name) => name.trim())
    });
    setNameOfGame("");
    setPlayerNames("");
  }
}

const Form = styled.form`
  display: grid;
  gap: 10px;
`;
