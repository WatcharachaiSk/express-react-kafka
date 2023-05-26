// import React from 'react'

import colors from '../../config/index.colors';

function HeaderContent(props: any) {
  return (
    <div
      className='d-flex justify-content-center'
      style={{ background: colors.black }}
    >
      <h3 style={{ color: colors.white }}>{props.title}</h3>
    </div>
  );
}

export default HeaderContent;
