import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { APIProvider } from "@vis.gl/react-google-maps";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { SecurityScan } from "./pages/SecurityScan";
import { LostPhone } from "./pages/LostPhone";
import { PhishingCheck } from "./pages/PhishingCheck";
import { AIExpert } from "./pages/AIExpert";
import { SOS } from "./pages/SOS";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Subscription } from "./pages/Subscription";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Provide an empty/placeholder API key if none is set, to prevent crashes.
  // The map might show a developer overlay, but the UI component will render.
  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "PLACEHOLDER_KEY";

  return (
    <LanguageProvider>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : !isSubscribed ? (
        <Subscription onSubscribe={() => setIsSubscribed(true)} />
      ) : (
        <APIProvider apiKey={mapsApiKey}>
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/scan" element={<SecurityScan />} />
                <Route path="/lost-phone" element={<LostPhone />} />
                <Route path="/phishing" element={<PhishingCheck />} />
                <Route path="/ai-expert" element={<AIExpert />} />
                <Route path="/sos" element={<SOS />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </APIProvider>
      )}
    </LanguageProvider>
  );
}

