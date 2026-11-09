import { useState } from "react";

// Answer key for the Build-a-Wordle starter.

const ANSWER = "hello";

function Tile({ letter, color }: { letter: string; color: string }) {
  return (
    <div
      className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold ${color}`}
    >
      {letter} {/* TASK 1 */}
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
  if (letter === ANSWER[index]) return "bg-green-500 text-white"; // TASK 3
  if (ANSWER.includes(letter)) return "bg-yellow-500 text-white";
  return "bg-gray-500 text-white";
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
    setGuesses(guesses.concat(guess));
    setGuess("");
  }

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <h1 className="text-5xl font-bold">Wordle</h1>
      <p className="text-sm text-gray-500">Answer (for testing): {ANSWER}</p>

      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-600 p-1"
          maxLength={5}
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
        <Row word={getRowWord(5)} submitted={guesses.length > 5} />
      </div>
    </div>
  );
}
