import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { PeoplePage, PlanetsPage, StarshipsPage, SpeciesPage } from '../Pages';

import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import { SwapiProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {
    state = {
        swapi: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapi }) => {
            const Service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapi: new Service()
            };
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <SwapiProvider value={ this.state.swapi } >
                    <Router>
                        <div className='app'>
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Route exact path='/' render={() => <h2>Welcome to Star Wars DB!</h2>} />
                            <Route path='/people' component={ PeoplePage } />
                            <Route path='/planets' component={ PlanetsPage } />
                            <Route path='/starships' component={ StarshipsPage } />
                            <Route path='/species' component={ SpeciesPage } />
                        </div>
                    </Router>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
};