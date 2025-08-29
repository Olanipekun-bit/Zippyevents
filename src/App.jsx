import { BrowserRouter } from 'react-router-dom';
import Hero from './Components/Hero';
import About from './Components/About';

function App() {
 return(
    <BrowserRouter>
        <Hero/>
        <About/>
    </BrowserRouter>
 );
}

export default App;
