import React from 'react';

import ItemList from '../ItemList/ItemList';
import { withData, withSwapi, withChild, compose } from '../hoc';

const mapPersonMethodsToProps = swapi => {
    return {
        getData: swapi.getAllPeople
    }
};

const mapPlanetMethodsToProps = swapi => {
    return {
        getData: swapi.getAllPlanets
    }
};

const mapStarshipMethodsToProps = swapi => {
    return {
        getData: swapi.getAllStarships
    }
};

const mapSpeciesMethodsToProps = swapi => {
    return {
        getData: swapi.getAllSpecies
    }
};

const renderNameAndBirth = item => <span>{ item.name }<span className="info">({ item.birthYear })</span></span>;
const renderNameAndTerrain = item => <span>{ item.name }<span className="info">({ item.rotationPeriod })</span></span>;
const renderNameAndModel = item => <span>{ item.name }<span className="info">({ item.model })</span></span>;
const renderNameAndLanguage = item => <span>{ item.name }<span className="info">({ item.language })</span></span>;

const PersonList = compose(
                        withSwapi(mapPersonMethodsToProps),
                        withData,
                        withChild(renderNameAndBirth)
                   )(ItemList);

const PlanetList = compose(
                        withSwapi(mapPlanetMethodsToProps),
                        withData,
                        withChild(renderNameAndTerrain)
                   )(ItemList);

const StarshipList = compose(
                        withSwapi(mapStarshipMethodsToProps),
                        withData,
                        withChild(renderNameAndModel)
                     )(ItemList);

const SpeciesList = compose(
                        withSwapi(mapSpeciesMethodsToProps),
                        withData,
                        withChild(renderNameAndLanguage),
                    )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};