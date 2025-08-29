import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';

function App() {
 return(
    <BrowserRouter>
        <Hero/>
    </BrowserRouter>
 );
}

export default App;
