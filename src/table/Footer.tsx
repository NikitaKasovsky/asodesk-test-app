import React from 'react';
import styled from 'styled-components';

export default function FooterComponent(): any {
  const Style = styled.tfoot`
    td {
      background-color: grey;
      height: 10px
    }
  `

  return (
    <Style>
      <tr><td colSpan={9}></td></tr>
    </Style>
  )
}
