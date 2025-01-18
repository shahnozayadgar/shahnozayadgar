import React from 'react';
import Profile from './components/Profile';
import PublicationList from './components/PublicationList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left sidebar for the profile */}
      <aside className="sidebar">
        <Profile />
      </aside>

      {/* Main content area for publications */}
      <main className="main-content">
        <PublicationList />
      </main>
    </div>
  );
}

export default App;