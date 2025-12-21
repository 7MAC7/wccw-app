import React from 'react';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';

interface BottomNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white border-t border-gray-200 pb-6 pt-2 px-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-start max-w-md mx-auto pb-4 px-1">
        {NAV_ITEMS.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-start flex-1 transition-colors duration-200 ${
                isActive ? 'text-wccw-purple font-bold' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] text-center whitespace-pre-line leading-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;