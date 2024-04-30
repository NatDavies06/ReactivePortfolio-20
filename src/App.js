import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
