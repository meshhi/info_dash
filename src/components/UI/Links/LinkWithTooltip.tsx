import React from 'react'
import styled from 'styled-components'

const Link = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding-inline: 4px;

  &::before {

  }

  &:hover::before {
    display: flex;
    content: "Нажмите правой кнопкой мыши -> Открыть ссылку в новой вкладке";
    position: absolute; 
    top: -40px;
    min-width: 20px;
    min-height: 20px;
    background-color: #EDF3FA;
    margin: 0 auto;
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid grey;
  }
`

export const LinkWithTooltip = ({children}) => {
  return (
    <Link>{children}</Link>
  )
}