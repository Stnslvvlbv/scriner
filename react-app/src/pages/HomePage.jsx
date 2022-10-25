import React from 'react';
import TraideSessions from '../components/TraideSessions';
import TraideSessionsCanvas from '../components/Canvas/TraideSessionsCanvas'

const HomePage = () => {

  return(
    <div>
      <TraideSessions />
      <TraideSessionsCanvas />
    </div>
  );
};

export {HomePage}
