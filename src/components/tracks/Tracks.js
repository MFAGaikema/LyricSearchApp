import React, { useContext } from 'react';
import {Context} from '../../context';

import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () => {
  const {trackList, heading} = useContext(Context);
  const [trackListValue, setTrackListValue] = trackList;
  const [headingValue, setHeadingValue] = heading;

  console.log(trackListValue);

  return (
    <div>
      {trackListValue.length === 0 || trackListValue === undefined ? <Spinner /> : 
        <>
          <h3 className="text-center mb-4">{headingValue}</h3>
          <div className="row">
            {trackListValue.map(trackData => (<Track key={trackData.track.track_id} data={trackData.track}/>))}
          </div>
        </>
         }
    </div>
  )
}

export default Tracks
