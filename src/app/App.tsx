import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/app/layout/MainLayout'

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Aquí irán las rutas a tus páginas de características (features) */}
        <Route
          path="/"
          element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h1>¡Bienvenido a tu Dashboard!</h1>
              <p>Esta es la base de tu aplicación escalable.</p>
              <p>Las páginas se crearán dentro de la carpeta `features/`.</p>
            </div>
          }
        />
        {/* Ejemplo de cómo se verían las rutas futuras: */}
        {/* <Route path="/auth/login" element={<LoginPage />} /> */}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        {/* <Route path="/users" element={<UsersListPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </MainLayout>
  )
}

export default App
