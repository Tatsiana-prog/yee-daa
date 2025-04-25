import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../components/Pages/Home/Home';
import Juciest from '../components/Pages/JuciePage/Juiciest';
import Vegan from '../components/Pages//VeganPage/Vegan';
import theme from '../themes/responsive-theme';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router basename="/yee-daa/">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/samoe-sochnoe' element={<Juciest />} />
                    <Route path='/veganskaya-kuhnya' element={<Vegan />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
