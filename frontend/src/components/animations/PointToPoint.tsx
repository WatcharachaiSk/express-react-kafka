// import { useEffect, useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
import { PropsPointType } from './type/props.point.type';
import './CustomCss.css';
import styled from 'styled-components';

function PointToPoint(props: PropsPointType) {
  const CustomLoaderNormal = styled.div`
    width: 24px;
    height: 24px;
    background: #000;
    border-radius: 50%;
    box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #000;
    animation: d5 2s infinite linear normal;
    @keyframes d5 {
      0% {
        box-shadow: 30px 0 #766df422, 60px 0 #766df422, 90px 0 #766df422;
        background: #000;
      }
      33% {
        box-shadow: 30px 0 #000, 60px 0 #766df422, 90px 0 #766df422;
        background: #000;
      }
      66% {
        box-shadow: 30px 0 #000, 60px 0 #000, 90px 0 #766df422;
        background: #000;
      }
    }
  `;

  return (
    <>
      <div>PointToPoint</div>
      <CustomLoaderNormal />
    </>
  );
}

export default PointToPoint;
