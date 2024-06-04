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
  import React from 'react';
  
  interface DataCardProps {
    id: number;
    title: string;
    note: string;
    onRemove: (id: number) => void;
  }
  
  const DataCard: React.FC<DataCardProps> = ({ id, title, note, onRemove }) => {
    return (
      <div className="w-screen h-full sm:w-1/2 md:w-1/3 p-4">
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
              <Label htmlFor={`picture-${id}`} className="mb-2 font-semibold">
                Document
              </Label>
              <Input
                id={`picture-${id}`}
                type="file"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </CardContent>
          <CardFooter
            className="p-4 bg-gray-100 rounded-b-lg"
            onClick={() => onRemove(id)}
          >
            <p className="flex justify-center border w-full text-2xl hover:cursor-pointer p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <button>
                <IoIosRemoveCircleOutline />
              </button>
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default DataCard;
  