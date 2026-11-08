import { useState } from "react";

const word = "hello";

function Tile({ letter, color }: { letter: string; color: string }) {
  return (
    <div className={`w-25 h-25 border-2 border-gray-600 ${color}`}>
      {letter}
    </div>
  );
}

function Row({ word, submitted }: { word: string; submitted: boolean }) {
  return (
    <div className="flex gap-1.5">
      <Tile letter={word[0]} color={getColor(word[0], 0, submitted)} />
      <Tile letter={word[1]} color={getColor(word[1], 1, submitted)} />
      <Tile letter={word[2]} color={getColor(word[2], 2, submitted)} />
      <Tile letter={word[3]} color={getColor(word[3], 3, submitted)} />
      <Tile letter={word[4]} color={getColor(word[4], 4, submitted)} />
    </div>
  );
}

function getColor(letter: string, index: number, submitted: boolean) {
  if (!submitted) return "border-gray-600";
  if (letter === word[index]) return "bg-green-500";
  if (word.includes(letter)) return "bg-yellow-500";
  return "bg-gray-500";
}

export default function App() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);

  function getRowWord(rowIndex: number) {
    if (rowIndex < guesses.length) return guesses[rowIndex];
    if (rowIndex === guesses.length) return guess;
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (guess.length !== 5) return;
    setGuesses([...guesses, guess]);
    setGuess("");
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl">Wordle</h1>
      <p> word: {word}</p>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </form>
      <div className="flex flex-col gap-1.5">
        <Row word={getRowWord(0)} submitted={guesses.length > 0} />
        <Row word={getRowWord(1)} submitted={guesses.length > 1} />
        <Row word={getRowWord(2)} submitted={guesses.length > 2} />
        <Row word={getRowWord(3)} submitted={guesses.length > 3} />
        <Row word={getRowWord(4)} submitted={guesses.length > 4} />
      </div>
    </div>
  );
}
