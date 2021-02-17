import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({children}) => {
  const [trackList, setTrackList] = useState([]);

  const [heading, setHeading] = useState('Top 10 Tracks');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`);
      setTrackList(result.data.message.body.track_list);
    };
 
    fetchData();
  }, []);

  return (
    <Context.Provider value={{trackList:[trackList, setTrackList], heading: [heading, setHeading]}}>
      {children}
    </Context.Provider>
  )
}
