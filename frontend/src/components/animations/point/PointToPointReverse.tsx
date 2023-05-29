// import React from 'react';

import styled from 'styled-components';
import { PropsPointType } from '../type/props.point.type';

function PointToPointReverse(props: PropsPointType) {
  const CustomLoaderReverse = styled.div`
    background: #766df422;
    border-radius: 50%;
    box-shadow: 30px 0 #766df422, 60px 0 #766df422, 90px 0 #000;
    animation: d6 2s infinite linear normal;
    @keyframes d6 {
      0% {
        box-shadow: 30px 0 #766df422, 60px 0 #766df422, 90px 0 #000;
        background: #766df422;
      }
      30% {
        box-shadow: 30px 0 #766df422, 60px 0 #000, 90px 0 #000;
        background: #766df422;
      }
      50% {
        box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #000;
        background: #766df422;
      }
      80% {
        box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #000;
        background: #000;
      }
    }
  `;
  return (
    <>
      <div>PointToPointReverse</div>
      <CustomLoaderReverse
        style={{ width: props.width, height: props.height }}
      />
    </>
  );
}

export default PointToPointReverse;
