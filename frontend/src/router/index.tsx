import SymbolsView from '@/components/SymbolsView';
import ProfileView from '@/components/ProfileView';
import StatementsView from '@/components/StatementsView';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import('@/components/ProfileView');
const Router = () => {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '50px', display: 'flex' }}>
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route index element={<SymbolsView />} />
        <Route index path="profile" element={<ProfileView />} />
        <Route index path="statements" element={<StatementsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
