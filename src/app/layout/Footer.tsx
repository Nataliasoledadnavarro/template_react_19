import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Mi Portfolio. Todos los derechos reservados.</p>
        <div className={styles.social}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:contact@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
