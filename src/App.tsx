import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DemoPage from '@/pages/DemoPage';
import MainTabsLayout from '@/layouts/MainTabsLayout';
import TargetsPage from '@/pages/TargetsPage';
import FilterPage from '@/pages/FilterPage';
import MocksPage from '@/pages/MocksPage';
import EvalPage from '@/pages/EvalPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/" element={<MainTabsLayout />}>
          <Route index element={<Navigate to="/targets" replace />} />
          <Route path="targets" element={<TargetsPage />} />
          <Route path="filter" element={<FilterPage />} />
          <Route path="mocks" element={<MocksPage />} />
          <Route path="eval" element={<EvalPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
