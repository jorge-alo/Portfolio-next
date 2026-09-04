import Link from 'next/link'
import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.links}>
           
            <Link href="/"> Inicio</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/sobre-mi">Sobre mi</Link>
            <Link href="/contacto">Contacto</Link>
        </div>
    </nav>
  )
}
