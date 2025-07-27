import { execSync } from 'child_process'

// Obtener el nombre de la rama actual
const getCurrentBranch = () => {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim()
  } catch (error) {
    console.error('❌ Error al obtener el nombre de la rama')
    process.exit(1)
  }
}

// Patrones válidos para nombres de ramas
const validBranchPatterns = [
  /^feature\/[a-z0-9-]+$/, // feature/descripcion-con-guiones
  /^fix\/[a-z0-9-]+$/, // fix/descripcion-con-guiones
  /^bugfix\/[a-z0-9-]+$/, // bugfix/descripcion-con-guiones
  /^hotfix\/[a-z0-9-]+$/, // hotfix/descripcion-con-guiones (opcional)
  /^release\/[a-z0-9.-]+$/, // release/v1.0.0 (opcional)
  /^main$/, // rama principal
  /^master$/, // rama principal (legacy)
  /^develop$/, // rama de desarrollo
]

const branchName = getCurrentBranch()

console.log(`🔍 Validando nombre de rama: "${branchName}"`)

// Verificar si el nombre de la rama es válido
const isValidBranch = validBranchPatterns.some(pattern => pattern.test(branchName))

if (!isValidBranch) {
  console.error(`
❌ NOMBRE DE RAMA INVÁLIDO: "${branchName}"

📋 Formatos válidos:
  • feature/descripcion-de-la-funcionalidad
  • fix/descripcion-del-arreglo
  • bugfix/descripcion-del-bug
  • hotfix/descripcion-critica
  • release/v1.0.0

✅ Ejemplos correctos:
  • feature/login-form
  • fix/header-responsive
  • bugfix/user-validation
  
❌ Ejemplos incorrectos:
  • feature/Login Form (espacios)
  • fix/headerResponsive (camelCase)
  • bugFix/user-validation (mayúsculas)
  
💡 Usa solo minúsculas, números y guiones (-)
`)
  process.exit(1)
}

console.log('✅ Nombre de rama válido')
