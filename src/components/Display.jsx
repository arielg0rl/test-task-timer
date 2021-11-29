import React from 'react';

function Display({ time }) {
  const hour = ('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2);
  const minute = ('0' + Math.floor(time / 6000)).slice(-2);
  const second = ('0' + Math.floor((time / 100) % 60)).slice(-2);

  return (
    <div>
      <span className='clock__time'>
        {`${hour} : `}
      </span>

      <span className='clock__time'>
      {`${minute} : `}
        </span>

      <span className='clock__time'>
        {second}
        </span>
    </div>
  );
}

export default Display;