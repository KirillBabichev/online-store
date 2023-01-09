import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import {ListGroup} from 'react-bootstrap';

import { Context } from '../'

const TypeBar = observer(() => {
    const { devices } = useContext(Context);
    return (
        <ListGroup>
        {devices.types.map((type) => (
            <ListGroup.Item
            style={{cursor: 'pointer'}}
            active={type.id === devices.selectedTypes.id}
            onClick={()=> devices.setSelectedTypes(type)}
            key={type.id}>{type.name}</ListGroup.Item>
        ))}
      </ListGroup>
    );
});

export default TypeBar;