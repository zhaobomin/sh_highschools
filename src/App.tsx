import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DemoPage from '@/pages/DemoPage';
import MainTabsLayout from '@/layouts/MainTabsLayout';
import TargetsPage from '@/pages/TargetsPage';
import FilterPage from '@/pages/FilterPage';
import MocksPage from '@/pages/MocksPage';
import EvalPage from '@/pages/EvalPage';
import SchoolDetailPage from '@/pages/SchoolDetailPage';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ProtectedRoute from '@/components/Shared/ProtectedRoute';
import { AuthProvider } from '@/lib/auth.tsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<ProtectedRoute><MainTabsLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/targets" replace />} />
            <Route path="targets" element={<TargetsPage />} />
            <Route path="filter" element={<FilterPage />} />
            <Route path="mocks" element={<MocksPage />} />
            <Route path="eval" element={<EvalPage />} />
          </Route>
          <Route path="/schools/:id" element={<ProtectedRoute><SchoolDetailPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
