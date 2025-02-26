import React, { FC, PropsWithChildren } from 'react'
import s from './container.module.css'

interface Props {
  className?: string;
}

const Container: FC<React.PropsWithChildren<Props>> =({className, children}) => {
  return (
    <div className={`${className} ${s.container}`}>{children}</div>
  )
}

export default Container