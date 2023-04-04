import { Outlet } from 'react-router-dom';
//import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
//  <Toaster position="top-right" reverseOrder={false} />
//  <AppBar />
