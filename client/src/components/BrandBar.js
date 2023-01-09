import React, { useContext } from 'react';
import {Card} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'


import { Context } from '../'


const BrandBar = observer(() => {
    const { devices } = useContext(Context);
    return (
        <div className='d-flex flex-wrap'>
            {devices.brands.map((brand) =>(
                <Card
                  style={{cursor: 'pointer'}}
                  key={brand.id}
                  className="p-3 m-1"
                  onClick={()=>devices.setSelectedBrand(brand)}
                  border={brand.id === devices.selectedBrand.id ? "danger": "light"}
                >
                  {brand.name}
                </Card>
            ))}
        </div>
    );
});

export default BrandBar;