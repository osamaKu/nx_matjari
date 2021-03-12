import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import clsx from 'clsx'

export interface LinkProps extends NextLinkProps {
  className?: string
}

const Link: React.FC<LinkProps> = ({ className, href, children, ...props }) => {
  const rootClassName = clsx('mt-link', className)

  return (
    <NextLink href={href}>
      <a className={rootClassName} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
