// src/app/dogs/[name]/page.js

import { dogs } from "../dogsData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function DogDetails({ params }) {
  const { name } = params;
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return notFound(); // Redirect to 404 page if not found

  return (
    <div className="p-6">
      <Image src={dog.image} alt={dog.name} width={800} height={256} className="w-full h-64 object-cover my-4 rounded-md"/>
      <Image src={dog.image} alt={dog.name} width={800} height={256} className="w-full h-64 object-cover my-4 rounded-md"/>
      <p className="text-lg">{dog.description}</p>
      <p className="text-gray-600">Age: {dog.age} years old</p>
      <Link href="/dogs" className="mt-4 inline-block text-blue-500">← Back to All Dogs</Link>
    </div>
  );
}
