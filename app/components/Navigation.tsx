import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4">
      <div className="max-w-4xl mx-auto flex gap-4">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          Home
        </Link>        
        <Link 
          to="/todos" 
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          Todos
        </Link>
        <Link 
          to="/about" 
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          About
        </Link>
        <Link 
          to="/starwars" 
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          Star Wars
        </Link>
      </div>
    </nav>
  );
}
