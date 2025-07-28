import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
