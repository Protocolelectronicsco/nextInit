
import React, { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const style={
  color: '#0070f3',
  textDecoration: 'underline'
}
interface Props {
  href:string,
  text:string
}
export const ActiveLink: FC <Props> = ({text,href})=>{
  const {asPath}=useRouter()

  return (
    <Link style={asPath===href?style:undefined} href={href}>{text}</Link>
  )
}
