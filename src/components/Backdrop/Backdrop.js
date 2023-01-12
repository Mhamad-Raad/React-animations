import React from 'react';
import { Transition } from 'react-transition-group';

import './Backdrop.css';

const backdrop = (props) => {
  return (
    <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
          {(state) => {
        const cssClasses = [
          'Backdrop',
          state === 'entering'
            ? 'BackdropOpen'
            : state === 'exiting'
            ? 'BackdropClose'
            : null,
        ];
        return <div className={cssClasses.join(' ')}></div>;
      }}
    </Transition>
  );
};

export default backdrop;
