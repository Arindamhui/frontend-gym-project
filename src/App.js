import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import MemberList from './components/MemberList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Gym Portfolio</h1>
                <switch>
                    <Route path="/" exact component={MemberList} />
                    <Route path="/register" component={RegistrationForm} />
                    </switch>
            </div>
        </Router>
    );
};

export default App;
