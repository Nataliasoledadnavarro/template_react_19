import type { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClass = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${loading ? styles.loading : ''} 
    ${className}
  `.trim()

  return (
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {loading ? <span className={styles.spinner}>⏳</span> : children}
    </button>
  )
}

export default Button
