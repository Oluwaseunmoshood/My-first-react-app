import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', backgroundColor: 'rgba(254,254,254,0.7)',  height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;