import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { LandingPage } from "@/features/landing/LandingPage";
import { CatalogPage } from "@/features/catalog/CatalogPage";
import { ProductDetailsPage } from "@/features/catalog/ProductDetailsPage";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
