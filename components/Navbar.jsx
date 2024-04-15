import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-lg font-bold">
                Ezequiel Menor
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/addTopic" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Añadir Tema
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}