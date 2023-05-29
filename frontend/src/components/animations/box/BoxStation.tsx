import React from 'react';
import styled from 'styled-components';
import { IoTrainOutline } from 'react-icons/io5';
import { useSpring, animated } from '@react-spring/web';
// IoTrainOutline ,GrTrain
function BoxStation() {
  const valueBorderRadius = 5;
  const valuePadding = 12;
  const BoxDiv = styled.div`
    /* padding: 15px; */
    border: 3px solid red;
    flex: 0;
  `;
  const [props] = useSpring(
    () => ({
      loop: true,
      config: { duration: 1000 },
      from: { opacity: 0.1 },
      to: { opacity: 1 },
    }),
    []
  );
  return (
    <>
      <BoxDiv
        className='d-flex flex-column'
        style={{
          background: '#fff',
          borderRadius: 8,
        }}
      >
        <animated.div style={props}>
          <div
            style={{
              flex: 1,
              margin: 2,
              background: 'red',
              borderTopLeftRadius: valueBorderRadius,
              borderTopRightRadius: valueBorderRadius,
              // padding: 10,
              paddingLeft: valuePadding,
              paddingRight: valuePadding,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IoTrainOutline size={25} color={'#fff'}></IoTrainOutline>
          </div>
        </animated.div>
        <animated.div style={props}>
          <div
            style={{
              flex: 1,
              margin: 2,
              background: 'red',
              borderEndStartRadius: valueBorderRadius,
              borderEndEndRadius: valueBorderRadius,
              // padding: 10,
              paddingLeft: valuePadding,
              paddingRight: valuePadding,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IoTrainOutline size={25} color={'#fff'}></IoTrainOutline>
          </div>
        </animated.div>
      </BoxDiv>
    </>
  );
}

export default BoxStation;
