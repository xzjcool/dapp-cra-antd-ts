import React from 'react'
import styled, { keyframes } from 'styled-components'

const prg = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
    display: none;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Bar = styled.div`
  position: fixed;
  width: 100%;
  transform: translateX(-100%);
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary};
  animation: ${prg} 3s linear;
  height: 3px;
`

const Cycle = styled.div`
  position: fixed;
  right: 15px;
  top: 5px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-top-color: #fff;
  animation: ${rotate} 0.5s linear infinite;
`

export const Progress = () => {
  return (
    <div>
      <Bar />
      <Cycle />
    </div>
  )
}
