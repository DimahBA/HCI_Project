import React from 'react';
import dishIcon from '../src/assets/icons/dish.svg';
import forkIcon from '../src/assets/icons/fork.svg';


const App = () => {
  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-orange-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-red-800 text-amber-100 py-3 px-4 flex justify-between items-center">
        <h1 className="text-xl font-serif">Table 24</h1>
        <button className="text-amber-100">

        </button>
      </div>

      {/* Main content with striped background */}
      <div
        className="flex-1 flex flex-col p-6 bg-orange-100"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255, 233, 201, 0.5) 15px, rgba(255, 233, 201, 0.5) 30px)'
        }}
      >
        {/* Welcome text */}
        <div className="text-center my-8">
          <h2 className="text-3xl font-serif text-amber-950">Welcome</h2>
          <h2 className="text-3xl font-serif text-amber-950">to our Restaurant!</h2>
        </div>

        {/* Menu buttons */}
        <div className="flex justify-center gap-4 my-8">
          <button className="flex flex-col items-center justify-center bg-red-800 text-amber-100 rounded-lg p-4 w-32 h-32">
            <div className="flex items-center justify-center mb-2">
              <img src={forkIcon} width="64" height="64" alt="Menu icon" />
            </div>
            <span className="text-xl font-serif">Menu</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-red-800 text-amber-100 rounded-lg p-4 w-32 h-32">
            <div className="flex items-center justify-center mb-2">
              <img src={dishIcon} width="64" height="64" alt="Menu icon" />
            </div>
            <span className="text-xl font-serif">Set<br />Menus</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-300 my-8"></div>

        {/* Footer buttons */}
        <div className="flex justify-center gap-4 mt-auto mb-8">
          <button className="flex items-center justify-center border border-red-800 text-red-800 rounded-md py-2 px-4">

            <span>Settings</span>
          </button>

          <button className="flex items-center justify-center border border-red-800 text-red-800 rounded-md py-2 px-4">

            <span>Need help?</span>
          </button>
        </div>
      </div>

      {/* Device label - just for illustration */}
      <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400">
        iPhone 16 - 2
      </div>
    </div>
  );
};

export default App;