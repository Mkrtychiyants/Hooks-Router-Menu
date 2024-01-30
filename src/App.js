import { Route, Routes} from 'react-router-dom';
import {HomePage} from './component/HomePage/HomePage';
import {DriftPage} from './component/DriftPage/DriftPage';
import {TimeAttackPage} from './component/TimeAttackPage/TimeAttackPage';
import {ForzaPage} from './component/ForzaPage/ForzaPage';
import { Layout } from './component/Layout/Layout';
  
export default function App() {
  return (
       <Routes>
          <Route path="/"  element={<Layout/>} >
            <Route path="/"  element={<HomePage/>} />
            <Route path="/drift" element={<DriftPage/>} />
            <Route path="/timeattack" element={<TimeAttackPage/>} />
            <Route path="/forza" element={<ForzaPage/>} />
          </Route>      
    </Routes>

  );
}