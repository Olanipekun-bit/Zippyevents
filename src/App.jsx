import { BrowserRouter } from 'react-router-dom';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';

function App() {
 return(
    <BrowserRouter>
        <Hero/>
        <AboutUs/>
    </BrowserRouter>
 );
}

export default App;
