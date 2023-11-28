import './App.css';
import { Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Chatspage from './pages/Chatspage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Homepage} exact />
        <Route path="/chats" Component={Chatspage} exact />
      </Routes>
    </>
  );
}

export default App;
