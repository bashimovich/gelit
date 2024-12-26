import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Lazy load the components
const Home = lazy(() => import('./../pages/Home'));
const loading = process.env.PUBLIC_URL + "/loading.gif";
const LoadingComponent = () => (
  <div style={{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0'
  }}>
    <div><img src={loading} alt="Loading..." /></div>
  </div>
);

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MyRoutes;