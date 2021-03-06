import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonList, PersonDetails } from '../SWComponents';
import Row from '../Row';

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <Row
            left={ <PersonList onItemSelected={ (id) => history.push(id) } /> }
            right={ <PersonDetails id={ id } /> }
        />
    )
};

export default withRouter(PeoplePage);