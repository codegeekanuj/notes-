import "./App.css";
import Navbar from "@/components/navbar";
import InputCard from "@/components/InputCard";
import DataCard from "@/components/DataCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

interface Card {
  id: number;
  title: string;
  note: string;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards") || "[]");
    setCards(savedCards);
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleRemoveCard = (id: number) => {
    const updatedCards = cards.filter((card: Card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="m-3">
        <Popover>
          <PopoverTrigger style={{ position: "fixed", top: "90%", left: "90%" }}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 active:bg-blue-700 transition duration-300 fixed">
              Open
            </button>
          </PopoverTrigger>
          <PopoverContent style={{ minWidth: "35vw" }}>
            <InputCard />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((item: Card) => (
          <DataCard
            key={item.id}
            id={item.id}
            title={item.title}
            note={item.note}
            onRemove={handleRemoveCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
