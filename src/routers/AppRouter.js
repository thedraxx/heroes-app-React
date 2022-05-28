import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* Ruta Publica */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    } />

                    {/* <Route path="/login" element={<LoginScreen />} /> */}

                    {/* Rutas privadas */}
                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } />
                    {/* <Route path="/*" element={<DashboardRoutes />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
