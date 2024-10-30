import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
	<div>
		<footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="ml-2 text-xl font-semibold">Dream Weddings</span>
          </div>
          <p className="text-gray-400">© 2024 Dream Weddings. All rights reserved.</p>
        </div>
      </footer>

	</div>
  )
}

export default Footer