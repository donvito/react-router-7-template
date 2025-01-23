import { Navigation } from "../components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Our Project</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Exploring the power of React Router 7 with modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We're dedicated to showcasing the capabilities of React Router 7 
              while creating intuitive and responsive web applications. Our goal 
              is to demonstrate best practices in modern web development.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📦</span> React Router 7
              </li>
              <li className="flex items-center">
                <span className="mr-2">⚛️</span> React
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎨</span> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span> Responsive Design
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Fast Loading</h3>
              <p className="text-gray-600 dark:text-gray-400">Optimized performance with React Router's data loading</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-400">Seamless dark mode integration for better user experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Responsive</h3>
              <p className="text-gray-600 dark:text-gray-400">Fully responsive design that works on all devices</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get Started</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Ready to explore? Check out our features and start building amazing applications!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://reactrouter.com/en/main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Documentation
            </a>
            <a 
              href="https://github.com/remix-run/react-router" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
