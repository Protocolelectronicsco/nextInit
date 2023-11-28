
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import MainLayouts from '@/components/layouts/MainLayouts'
const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
    return(
        <MainLayouts>
          <div className={styles.description}>
            <h1>Contact Page</h1>
          <h1 className={styles.title}>
            Ir a <Link href="/">Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/contact.tsx</code>
          </p>
        </div>
        </MainLayouts>
    )
}