import React, { useState } from 'react';
import { View, User } from './types';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Donate from './pages/Donate';
import Community from './pages/Community';

const App: React.FC = () => {
  // Using state for navigation since this is a simple SPA structure
  // suitable for a webview wrapper in mobile apps.
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={setCurrentView} />;
      case View.ABOUT:
        return <About />;
      case View.HISTORY:
        return <History />;
      case View.COMMUNITY:
        return <Community user={user} onLogin={handleLogin} onLogout={handleLogout} />;
      case View.DONATE:
        return <Donate />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased max-w-md mx-auto relative shadow-2xl overflow-hidden">
      {/* 
        max-w-md mx-auto simulates a mobile device frame on desktop 
        while filling the screen on actual mobile devices.
      */}
      
      {/* Header/Status Bar Simulation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Simple Logo Placeholder */}
          <div className="w-8 h-8 bg-wccw-purple rounded-lg flex items-center justify-center text-white font-bold text-xs">
            W
          </div>
          <span className="font-serif font-bold text-gray-800">WCCW</span>
        </div>
        <div className="flex items-center gap-2">
          {user && (
            <span className="text-[10px] text-wccw-purple font-bold">
              {user.isAdmin ? 'Admin' : 'User'} Mode
            </span>
          )}
          <div className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-500 font-medium">
            Mobile Ver.
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="animate-fade-in">
        {renderView()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
};

export default App;