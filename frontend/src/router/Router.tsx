
import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import ProfileView from '@/components/ProfileView/ProfileView';
import SymbolsView from '@/components/SymbolsView/SymbolsView';
import StatementsView from '@/components/StatementsView/StatementsView';

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
