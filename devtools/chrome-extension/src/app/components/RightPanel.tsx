import React from 'react'
import styled from 'styled-components'

export const RightPanel = styled(({ className, dataSource }) => {
  return (
    <div className={className}>

    </div>
  )
})`
  border-left: 1px solid #3d424a;
  flex-grow: 2;
  overflow: auto;
  padding: 10px;

`
