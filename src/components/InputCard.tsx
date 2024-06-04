import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface CardItem {
  id: number;
  title: string;
  note: string;
}

const InputCard: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const savedCards: CardItem[] = JSON.parse(localStorage.getItem("cards") || "[]");
    setCards(savedCards);
  }, []);

  const handleAddCard = () => {
    if (!title.trim() || !note.trim()) {
      alert("Please enter both a title and a note.");
      return;
    }
    const newCard: CardItem = { id: Date.now(), title, note };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
    setTitle("");
    setNote("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddCard();
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <div className="p-4 flex justify-center items-center min-h-1/3 bg-gray-100">
      <Card className="w-full max-w-5xl shadow-lg rounded-lg p-6 bg-white">
        <CardHeader className="mb-4">
          <CardTitle className="text-3xl font-bold text-center">
            Add New Note
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col items-center gap-4">
            <Input
              placeholder="Title..."
              value={title}
              onChange={handleTitleChange}
              onKeyDown={handleKeyDown}
              className="p-2 border border-gray-300 rounded mb-2 focus:outline-none"
            />
            <Input
              placeholder="Take a note..."
              value={note}
              onChange={handleNoteChange}
              onKeyDown={handleKeyDown}
              className="p-2 border border-gray-300 rounded mb-2 focus:outline-none"
            />
            <button
              onClick={handleAddCard}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 w-1/3"
            >
              Add Card
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InputCard;
