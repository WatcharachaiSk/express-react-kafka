// import React from "react";

import BoxStation from '../../components/animations/box/BoxStation';
import PointToPointNormal from '../../components/animations/point/PointToPointNormal';
import PointToPointReverse from '../../components/animations/point/PointToPointReverse';
import HeaderContent from '../../components/header/HeaderContent';

function Dashboard() {
  return (
    <>
      <HeaderContent title='Dashboard' />
      <div>
        <PointToPointNormal width={20} height={20} />
        <PointToPointReverse width={20} height={20} />
      </div>
      <div className='d-flex' style={{ background: 'green' }}>
        <BoxStation />
        <div style={{ display: 'flex', flex: 1 }}></div>
      </div>
    </>
  );
}

export default Dashboard;
