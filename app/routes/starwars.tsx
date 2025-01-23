import { useLoaderData } from "react-router";
import type { LoaderFunction } from "react-router";
import { Navigation } from "../components/Navigation";

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  eye_color: string;
}

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return data.results;
}

export default function StarWars() {
  const characters = useLoaderData() as Character[];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Star Wars Characters</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character: Character) => (
            <div
              key={character.name}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{character.name}</h2>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li><span className="font-medium">Height:</span> {character.height}cm</li>
                <li><span className="font-medium">Mass:</span> {character.mass}kg</li>
                <li><span className="font-medium">Birth Year:</span> {character.birth_year}</li>
                <li><span className="font-medium">Eye Color:</span> {character.eye_color}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 