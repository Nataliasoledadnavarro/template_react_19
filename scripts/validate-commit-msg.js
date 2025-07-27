import fs from 'fs'

// Leer el mensaje de commit desde el archivo temporal de Git
const commitMsgFile = process.argv[2]
if (!commitMsgFile) {
  console.error('❌ No se proporcionó el archivo de mensaje de commit')
  process.exit(1)
}

let commitMsg
try {
  commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim()
} catch (error) {
  console.error('❌ Error al leer el mensaje de commit')
  process.exit(1)
}

console.log(`🔍 Validando mensaje de commit: "${commitMsg}"`)

// Patrones válidos para mensajes de commit (Conventional Commits)
const validCommitPatterns = [
  /^feat: .+$/, // feat: descripcion
  /^fix: .+$/, // fix: descripcion
  /^bugfix: .+$/, // bugfix: descripcion
  /^docs: .+$/, // docs: descripcion
  /^style: .+$/, // style: descripcion
  /^refactor: .+$/, // refactor: descripcion
  /^test: .+$/, // test: descripcion
  /^chore: .+$/, // chore: descripcion
  /^perf: .+$/, // perf: descripcion
  /^ci: .+$/, // ci: descripcion
  /^build: .+$/, // build: descripcion
  /^revert: .+$/, // revert: descripcion
]

// Verificar si el mensaje de commit es válido
const isValidCommit = validCommitPatterns.some(pattern => pattern.test(commitMsg))

if (!isValidCommit) {
  console.error(`
❌ MENSAJE DE COMMIT INVÁLIDO: "${commitMsg}"

📋 Formatos válidos (Conventional Commits):
  • feat: descripción de nueva funcionalidad
  • fix: descripción del arreglo
  • bugfix: descripción del bug corregido
  • docs: cambios en documentación
  • style: cambios de formato (espacios, comas, etc)
  • refactor: refactorización de código
  • test: agregar o modificar tests
  • chore: tareas de mantenimiento
  • perf: mejoras de performance
  • ci: cambios en CI/CD
  • build: cambios en build system
  • revert: revertir commits anteriores

✅ Ejemplos correctos:
  • feat: agregar formulario de login
  • fix: corregir validación de email
  • bugfix: resolver problema de memoria
  • docs: actualizar README
  
❌ Ejemplos incorrectos:
  • "agregar login" (sin tipo)
  • "Feat: login" (mayúscula)
  • "feat:login" (sin espacio)
  • "feat: " (sin descripción)

💡 Formato: tipo: descripción en minúsculas
`)
  process.exit(1)
}

console.log('✅ Mensaje de commit válido')
