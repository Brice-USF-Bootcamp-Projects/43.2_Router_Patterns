// src/app/dogs/page.jsx

import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import { dogs } from "./dogsData";

export default function DogsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-black font-bold mb-4">🐶 Dog Finder</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dogs.map((dog) => (
          <li key={dog.name} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/dogs/${dog.name.toLowerCase()}`}>
              {/* ✅ Use Next.js Image */}
              <Image 
                src={dog.src} 
                alt={dog.name} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{dog.name}</h2>
              <p className="text-gray-600">Age: {dog.age}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
