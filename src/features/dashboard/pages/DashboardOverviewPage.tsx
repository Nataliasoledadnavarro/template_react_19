import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

const DashboardOverviewPage = () => {
  const handleClick = () => {
    alert('Esta acción puede ser usada para navegar o mostrar datos.')
  }

  return (
    <div className="dashboard">
      <h2>Bienvenida al Dashboard</h2>
      <p>
        Este es el punto de inicio del template. Usá esta pantalla para resumir información general.
      </p>

      <div className="dashboard-cards" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Card title="Usuarios activos" subTitle="Sección de ejemplo" style={{ width: '300px' }}>
          <p>Actualmente hay 1.024 usuarios activos en el sistema.</p>
          <Button
            label="Ver usuarios"
            icon="pi pi-users"
            className="p-button-sm mt-2"
            onClick={handleClick}
          />
        </Card>

        <Card title="Tareas pendientes" subTitle="Sección de ejemplo" style={{ width: '300px' }}>
          <p>Tenés 7 tareas asignadas para hoy.</p>
          <Button
            label="Ver tareas"
            icon="pi pi-list"
            className="p-button-sm mt-2"
            onClick={handleClick}
          />
        </Card>
      </div>
    </div>
  )
}

export default DashboardOverviewPage
