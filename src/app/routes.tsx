import { Routes as RouterRoutes, Route } from 'react-router-dom'
import DashboardOverviewPage from '@/features/dashboard/pages/DashboardOverviewPage'
import NotFoundPage from './layout/NotFoundPage'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<DashboardOverviewPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  )
}

export default Routes
