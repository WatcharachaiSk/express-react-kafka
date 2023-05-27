import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { PropsPointType } from './type/props.point.type';

function PointToPoint(props: PropsPointType) {
  const [inPoint, setInPoint] = useState<number>(1);
  const props1 = useSpring({
    from: { opacity: 1 },
    config: { duration: 800 },
  });
  const props2 = useSpring({
    opacity: 0.2,
    from: { opacity: 0.8 },
    config: { duration: 5000 },
    loop: inPoint == 1 ? true : false,
  });
  const props3 = useSpring({
    opacity: 0.2,
    from: { opacity: 0.8 },
    config: { duration: 2000 },
    loop: inPoint == 2 ? true : false,
  });
  const props4 = useSpring({
    opacity: 0.2,
    from: { opacity: 0.8 },
    config: { duration: 1000 },
    loop: inPoint == 3 ? true : false,
  });

  return (
    <>
      <div>PointToPoint</div>
      <div className='d-flex'>
        <div className='mx-1'>
          <animated.div style={props1}>
            <div
              style={{
                width: props.width,
                height: props.height,
                borderRadius: 100,
                background: '#000000',
              }}
            ></div>
          </animated.div>
        </div>
        <div className='mx-1'>
          <animated.div style={props2}>
            <div
              style={{
                width: props.width,
                height: props.height,
                borderRadius: 100,
                background: '#9E9898',
              }}
            ></div>
          </animated.div>
        </div>
        <div className='mx-1'>
          <animated.div style={props3}>
            <div
              style={{
                width: props.width,
                height: props.height,
                borderRadius: 100,
                background: '#9E9898',
              }}
            ></div>
          </animated.div>
        </div>
        <div className='mx-1'>
          <animated.div style={props4}>
            <div
              style={{
                width: props.width,
                height: props.height,
                borderRadius: 100,
                background: '#9E9898',
              }}
            ></div>
          </animated.div>
        </div>
      </div>
    </>
  );
}

export default PointToPoint;
