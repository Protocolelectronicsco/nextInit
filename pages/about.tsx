
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import MainLayouts from '@/components/layouts/MainLayouts'
import { DarkLayout } from '../components/layouts/DarkLayout';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
const inter = Inter({ subsets: ['latin'] })

const About: NextPageWithLayout = () => {
   
  return(
    <div className={styles.description}>
      <h1 className={styles.title}>||
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/pagina1.tsx</code>
      </p>
    </div>
  )
}

About.getLayout = function getLayout(page:JSX.Element){
  return(
    <MainLayouts>
        <DarkLayout>{page}</DarkLayout>
      </MainLayouts>
  )
}

export default About