import Link from 'next/link'

interface Route {
  label: string,
  route: string
}

const links: Route[] = [
  {
    label: 'About',
    route: '/about'
  }
]

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <a>
                  <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                    Home
                  </Link>
                </a>
                {links.map(({ label, route }) =>
                  <a key={label}>
                    <Link href={route} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none focus:text-white focus:bg-gray-700">
                      {label}
                    </Link>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Inicio</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none focus:text-white focus:bg-gray-700">Acerca de</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none focus:text-white focus:bg-gray-700">Contacto</a>
        </div>
      </div>
    </nav>
  )
}