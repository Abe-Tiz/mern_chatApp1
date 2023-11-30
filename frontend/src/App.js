import './App.css';
import { Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Chatspage from './pages/Chatspage';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" Component={Homepage} exact />
        <Route path="/chats" Component={Chatspage} exact />
      </Routes>
    </div>
  );
}

export default App;
