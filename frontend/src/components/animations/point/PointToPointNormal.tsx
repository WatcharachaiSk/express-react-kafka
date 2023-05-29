// import { useEffect, useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
import { PropsPointType } from '../type/props.point.type';
import './CustomCss.css';
import styled from 'styled-components';

function PointToPointNormal(props: PropsPointType) {
  const CustomLoaderNormal = styled.div`
    background: #000;
    border-radius: 50%;
    box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #000;
    animation: d5 2s infinite linear normal;
    @keyframes d5 {
      0% {
        box-shadow: 30px 0 #766df422, 60px 0 #766df422, 90px 0 #766df422;
        background: #000;
      }
      30% {
        box-shadow: 30px 0 #000, 60px 0 #766df422, 90px 0 #766df422;
        background: #000;
      }
      50% {
        box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #766df422;
        background: #000;
      }
      80% {
        box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #000;
        background: #000;
      }
    }
  `;

  return (
    <>
      <div>PointToPointNormal</div>
      <CustomLoaderNormal
        style={{ width: props.width, height: props.height }}
      />
    </>
  );
}

export default PointToPointNormal;
