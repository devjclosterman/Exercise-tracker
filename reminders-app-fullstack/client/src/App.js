import AllReminders from './views/AllReminders';
import OneReminder from './views/OneReminder';
import New from './views/New';
import Edit from './views/Edit';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
   
    <div className="App"> 
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<AllReminders />} />
        <Route path='/:_id' element={<OneReminder />} />
        <Route path='/new' element={<New/>} />
        <Route path='/edit/:_id' element={<Edit />} />
      </Routes>
    </BrowserRouter> 
    </div>
  
  );
}

export default App;
