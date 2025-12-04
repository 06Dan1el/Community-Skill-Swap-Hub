import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserProfile from './components/UserProfile';
import BrowseResources from './components/BrowseResources';
import PostResource from './components/PostResource';
import ResourceDetail from './components/ResourceDetail';
import AIToolsPage from './components/AIToolsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/browse" element={<BrowseResources />} />
              <Route path="/resource/:id" element={<ResourceDetail />} />
              <Route path="/ai-tools" element={<AIToolsPage />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/post-resource"
                element={
                  <ProtectedRoute>
                    <PostResource />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}