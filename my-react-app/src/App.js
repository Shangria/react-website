import './App.css';
import Home from '../src/pages/index';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Home />
        </Router>
    );
}

export default App;
