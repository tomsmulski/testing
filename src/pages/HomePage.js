import GameForm from "../components/GameForm";

export default function HomePage({ onCreateGame }) {
  return <GameForm onCreateGame={onCreateGame} />;
}
