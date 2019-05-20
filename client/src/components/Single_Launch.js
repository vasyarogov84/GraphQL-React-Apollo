import React from 'react';
import { Link } from 'react-router-dom';

const SingleLaunch = (props) => {
    const getValue = (val) => props.data.get(val);
    const get = (val1, val2) => props.data.getIn([val1, val2]);

    

    return (
        <div  className="ui menu">
            <Link to={`/${getValue('flight_number')}`} className="header item">
                {get('rocket', 'rocket_name')}
            </Link>
            <p className="item">{getValue('flight_number')}</p>
            <p className="item">{getValue('mission_name')}</p>
            <p className="item">{getValue('launch_year')}</p>
            <p className="item">{getValue('launch_date_local')}</p>
            <p className="item">{getValue('launch_success') ? <i className="thumbs up icon"></i> : <i className="thumbs down icon"></i>}</p>
            <p className="item"> {get('rocket', 'rocket_type')}</p>
        </div>
    );
}




export default SingleLaunch;
