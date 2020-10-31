import React from 'react';
import logo from './logo.svg';
import './App.css';
import WhyReact from './components/WhyReact';
import { MyComponent } from './Amis';
import '../node_modules/amis/lib/themes/default.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
