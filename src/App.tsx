import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
// Components PrimeReact
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

function App() {
  return (
    <div className="p-4">
      <Card title="🚀 React 19 + PrimeReact Test" className="mb-4">
        <p className="mb-3">
          Si ves este componente funcionando, significa que React 19 y PrimeReact son compatibles!
          ✅
        </p>
        <div className="flex flex-column gap-3">
          <InputText placeholder="Test input con React 19" />
          <Button
            label="Test Button"
            icon="pi pi-check"
            onClick={() => alert('¡React 19 + PrimeReact funcionando!')}
          />
        </div>
      </Card>

      <Card title="📊 Versiones" className="mb-4">
        <ul>
          <li>
            <strong>React:</strong> 19.1.0
          </li>
          <li>
            <strong>PrimeReact:</strong> 10.9.6
          </li>
          <li>
            <strong>React Router:</strong> 7.7.0
          </li>
          <li>
            <strong>TypeScript:</strong> 5.8.3
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default App
