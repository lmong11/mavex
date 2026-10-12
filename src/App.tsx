import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
import SupplyChainPolicyPage from './pages/SupplyChainPolicyPage';
import MaterialsPage from './pages/MaterialsPage';
import ProductionQualityPage from './pages/ProductionQualityPage';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="materials-processing" element={<MaterialsPage />} />
          <Route path="production-quality" element={<ProductionQualityPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="policies/supply-chain" element={<SupplyChainPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
