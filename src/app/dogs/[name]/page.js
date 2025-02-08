// src/app/dogs/[name]/page.js

import { dogs } from "../dogsData";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import { notFound } from "next/navigation";

export default function DogDetails({ params }) {
  const { name } = params;
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return notFound();

  return (
    <div className="bg-green-400">
      <div className="p-6 text-black text-center">
        <h1 className="text-3xl font-bold">{dog.name}</h1>
        
        {/* Responsive Image Fix */}
        <div className="relative w-full h-64 mx-auto">
          <Image 
            src={dog.src} 
            alt={dog.name} 
            fill
            className="object-contain rounded-md"
          />
        </div>

        <p className="text-lg mt-4">Age: {dog.age} years old</p>
        <ul className="list-disc ml-6 text-left">
          {dog.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        
        <Link href="/dogs" className="mt-4 inline-block text-blue-500">← Back to All Dogs</Link>
      </div>
    </div>
  );
}


