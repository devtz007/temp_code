import React, { useState, useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// Import custom components
import LoadingUi1PagePart from './pageParts/loading_ui_1-pagePart'; // Loader component

// Import styles
import './app.scss';

// Static components
import Header4PagePart from '@/pageParts/header_4-pagePart.tsx';
import Header5PagePart from '@/pageParts/header_5-pagePart.tsx'; // New Header
import Footer2PagePart from '@/pageParts/footer_2-pagePart';

// Dynamic components to Lazy-load pages
const Reg2Page = React.lazy(() => import('@/pages/reg_2-page'));
const Login2Page = React.lazy(() => import('@/pages/login_2-page'));
const HomePage = React.lazy(() => import('@/pages/home_2-page'));
const TutorFinder2Page = React.lazy(
  () => import('./pages/tutor_finder_2-page'),
);
const TutorDetail1Page = React.lazy(
  () => import('./pages/tutor_detail_1-page'),
);
const DashBoardStudentHome1Page = React.lazy(
  () => import('@/pages/dash_board_student_home_1-page'),
);

const App: React.FC = (): JSX.Element => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [progress, setProgress] = useState(0); // Dynamic progress
  const location = useLocation();

  // Determine which header to show based on the current path
  const renderHeader = () => {
    if (location.pathname.startsWith('/dashboard/student')) {
      return <Header5PagePart />;
    }
    return <Header4PagePart />;
  };

  // Calculate header height for layout purposes
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElem = document.querySelector('header');
      if (headerElem) {
        setHeaderHeight(headerElem.offsetHeight);
      }
    };

    updateHeaderHeight(); // Initial calculation
    window.addEventListener('resize', updateHeaderHeight); // Recalculate on resize

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  //* Simulate loading progress *//
  useEffect(() => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10; // Increment progress
      setProgress(Math.min(progressValue, 100)); // Cap progress at 100%
      if (progressValue >= 100) clearInterval(interval);
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [location]);

  return (
    <>
      {/* Conditional header */}
      {renderHeader()}
      <main
        className={'main'}
        style={
          {
            '--header-height': `${headerHeight}px`,
          } as React.CSSProperties
        }
      >
        {/* //Suspense fallback for lazy-loaded components */}
        <Suspense
          fallback={
            <div className="page_loader_ui">
              <LoadingUi1PagePart progress={progress} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tutor_finder" element={<TutorFinder2Page />} />
            <Route path="/tutor_detail" element={<TutorDetail1Page />} />
            <Route path="/login" element={<Login2Page />} />
            <Route path="/registration" element={<Reg2Page />} />
            <Route
              path="/dashboard/student"
              element={<DashBoardStudentHome1Page />}
            />
          </Routes>
        </Suspense>
        <Footer2PagePart />
      </main>
    </>
  );
};

// Wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

// Set display name for better debugging and searching
App.displayName = 'App';

export default AppWrapper;
