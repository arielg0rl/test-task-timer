import React from 'react';

function Button({ start, wait, reset, resume, status }) {
  return (
      <div>
          {(status === 0) ?
            <button onClick={start}>Start</button>
            : ""
          }

          {(status === 1) ?
            <div>
              <button
                onClick={wait}
              >
                Wait
              </button>

              <button onClick={reset}>Reset</button>
            </div>
            : ""
          }

          {(status === 2) ?
            <div>
              <button onClick={resume}>Resume</button>
              <button onClick={reset}>Reset</button>
            </div>
            : ""
          }
      </div>
  );
}

export default Button;