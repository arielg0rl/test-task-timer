import React from 'react';

function Button({ start, wait, reset, stop, status }) {
  return (
    <div>
      {(status === 0) &&
        <button className='clock__button' onClick={start}>Start</button>
      }

      {(status === 1) &&
        <div>
          <button className='clock__button'
            onClick={wait}
          >
            Wait
          </button>

          <button className='clock__button' onClick={stop}>Stop</button>

          <button className='clock__button' onClick={reset}>Reset</button>
        </div>
      }

      {(status === 2) &&
        <div>
        <button className='clock__button' onClick={start}>Start</button>
        <button className='clock__button' onClick={stop}>Stop</button>
        <button className='clock__button' onClick={reset}>Reset</button>
        </div>
      }
    </div>
  );
}

export default Button;