import React from 'react';
// import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

import './Backdrop.css';

const backdrop = (props) => {
  return (
    // <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
    //       {(state) => {
    //     const cssClasses = [
    //       'Backdrop',
    //       state === 'entering'
    //         ? 'BackdropOpen'
    //         : state === 'exiting'
    //         ? 'BackdropClose'
    //         : null,
    //     ];
    //     return <div className={cssClasses.join(' ')}></div>;
    //   }}
    // </Transition>

    <CSSTransition
      in={props.show}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'BackdropOpen',
        exit: '',
        exitActive: 'BackdropClose',
      }}
    >
      <div className='Backdrop'></div>
    </CSSTransition>
  );
};

export default backdrop;
