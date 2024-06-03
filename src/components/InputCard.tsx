import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function InputCard({ id, title, note, onRemove }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <Card className="shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
          <CardTitle className="mb-2 text-2xl font-bold">
            {title || "Title..."}
          </CardTitle>
          <CardDescription className="mb-2 text-xl">
            {note || "Your note..."}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={`picture-${id}`} className="mb-2 font-semibold">Document</Label>
            <Input id={`picture-${id}`} type="file" className="p-2 border border-gray-300 rounded" />
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-gray-100 rounded-b-lg">
          <p className="flex justify-center border w-full text-2xl hover:cursor-pointer p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <button onClick={() => onRemove(id)}>
              <IoIosRemoveCircleOutline />
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

// Parent component
const App = () => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleAddCard = () => {
    if (!title.trim() || !note.trim()) {
      alert('Please enter both a title and a note.');
      return;
    }
    setCards([...cards, { id: cards.length + 1, title, note }]);
    setTitle('');
    setNote('');
  };

  const handleRemoveCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCard();
    }
  };

  return (
    <div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-5xl shadow-lg rounded-lg p-6 bg-white">
        <CardHeader className="mb-4">
          <CardTitle className="text-3xl font-bold text-center">Add New Note</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col items-center gap-4">
            <Input 
              placeholder="Title..." 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              onKeyDown={handleKeyDown}
              className="p-2 border border-gray-300 rounded mb-2 w-1/2 focus:outline-none"
            />
            <Input 
              placeholder="Take a note..." 
              value={note} 
              onChange={(e) => setNote(e.target.value)} 
              onKeyDown={handleKeyDown}
              className="p-2 border border-gray-300 rounded mb-2 w-1/2 focus:outline-none"
            />
            <button 
              onClick={handleAddCard} 
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 w-1/4"
            >
              Add Card
            </button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {cards.map(item => (
              <InputCard 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                note={item.note} 
                onRemove={handleRemoveCard} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
