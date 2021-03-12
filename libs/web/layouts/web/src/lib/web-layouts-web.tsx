import React, { FC } from 'react'
import { Header as WHeader } from '../components/header/header'

import './web-layouts-web.module.css'

export interface WebLayoutsWebProps {
  children: React.ReactNode
}

export const WebLayoutsWeb: FC<WebLayoutsWebProps> = ({ children }) => {
  return (
    <div className={'mtw-platform mtw-wrapper max-w-screen-2xl mx-auto'}>
      <div className={'mtw-header'}>
        <WHeader />
      </div>
      <div className={'mtw-content'}>{children}</div>
      <div className={'mtw-footer'}>footer</div>
    </div>
  )
}

export default WebLayoutsWeb
