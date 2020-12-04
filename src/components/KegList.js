import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props){
  return (
    <React.Fragment>
      <h2>Keg List</h2>
      <hr />
      {props.kegList.map((x) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={x.name}
          brand={x.brand}
          price={x.price}
          alcoholContent={x.alcoholContent}
          pints={x.pints}
          id={x.id}
          key={x.id} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;