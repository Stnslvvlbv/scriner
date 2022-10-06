import React from 'react';

import { DPrice } from '../components/block/DPrice'

const Screener = function(props) {

  return(
    <div className="page">
      <h1>Screener</h1>
      <p>{props.colorTheme}</p>
       < DPrice />
    </div>
  )
}

export {Screener}
