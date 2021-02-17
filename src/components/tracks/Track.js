import React from 'react';
import {Link} from 'react-router-dom';

const Track = ({ data }) => {
	const { track_name, track_id, artist_name, album_name } = data;

	return (
		<div className='col-md-6' key={track_id}>
			<div className='card mb-4 shadow-sm'>
				<div className='card-body'>
					<h5>{artist_name}</h5>
          <p className="card-text">
            <strong><i className="fas fa-play"></i> Track</strong>: {track_name}
            <br/>
            <strong><i className="fas fa-compact-disc"></i> Album</strong>: {album_name}
          </p>
          <Link to={`lyrics/track/${track_id}`} className="btn btn-dark w-100">
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
				</div>
			</div>
		</div>
	);
};

export default Track;
