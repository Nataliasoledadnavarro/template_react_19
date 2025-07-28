import Header from './Header'
import Footer from './Footer'
import styles from './MainLayout.module.css'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
