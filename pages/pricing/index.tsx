
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import MainLayouts from '@/components/layouts/MainLayouts'

const inter = Inter({ subsets: ['latin'] })

export default function Pricing() {
  return (
    <MainLayouts>
      <div className={styles.description}>
        <h1>Princing page</h1>
          <h1 className={styles.title}>
            Ir a <Link href="/pagina1">Pagina 1</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
    </MainLayouts>
  )
}