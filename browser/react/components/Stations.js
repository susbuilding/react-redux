import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  const stations = props.stations;
  console.log('***************',stations);
  console.log('//////', Object.keys(stations));
  return(
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(stations).map(function(genre){
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
