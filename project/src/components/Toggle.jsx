import React from "react";

export default function Toggle({ name }) {
    return (
        <label className="inline-flex items-center cursor-pointer p-2">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-16 h-9 bg-light-dark rounded-full peer 
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
      peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] 
      after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all 
      peer-checked:bg-red">
  </div>
             {/* peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 */}
            <span className="ms-3 text-lg font-medium text-dark ">{name}</span>
            
        </label>    
    )
}