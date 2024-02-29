import React from 'react'
import styled from 'styled-components'

const Link = styled.div`
  position: relative;

  &::before {

  }

  &:hover::before {
    display: flex;
    content: "нажитн";
    position: absolute;
    top: 0;
    min-width: 20px;
    min-height: 20px;
    background-color: red;
    margin: 0 auto;
  }
`

export const LinkWithTooltip = ({children}) => {
  return (
    <Link>{children}</Link>
  )
}