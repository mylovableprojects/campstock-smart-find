
import React from 'react'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">CampStock Inventory Manager 🚀</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Inventory Dashboard</h2>
          <p className="text-gray-600">
            Welcome to CampStock! Your inventory management system is being set up.
          </p>
        </div>
      </main>
    </div>
  )
}
