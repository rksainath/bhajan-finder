import React, { useContext } from 'react';
import BhajanContext from '../context/bhajanContext';

const Bhajan = () => {
  const bhajanContext = useContext(BhajanContext);

  return (
    <div className='row' style={{ whiteSpace: 'pre-wrap' }}>
      <div className='col s-12'>
        {/* <div className='card blue darken-1'>  */}
        <div className='card #b71c1c red darken-4'>
          <div className='card-content white-text valign center'>
            {/* <span className='card-title'>Lyrics</span> */}
            <p className='flow-text'>{bhajanContext.bhajan.lyric}</p>
          </div>
          <div className='card-action'>
            {/* <blockquote className='white-text'> */}
            <blockquote className='white-text'>
              {bhajanContext.bhajan.meaning}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bhajan;
