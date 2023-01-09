import React, { useContext } from 'react';
import {Row} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'

import { Context } from '..';
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const {devices} = useContext(Context);
    return (
        <Row className='d-flex gap-2'>
            {devices.devices.map((device) => 
            <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;