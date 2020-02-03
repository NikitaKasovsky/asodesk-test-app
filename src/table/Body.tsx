import React from 'react';
import { Row } from 'react-table';

import RowComponent from './Row';

interface IBodyProps {
  bodyProps: Function,
  prepareRow: Function,
  rows: Row[]
}

export default function BodyComponent(props: IBodyProps): any {
  const { bodyProps, prepareRow, rows } = props;

  return (
    <tbody {...bodyProps()}>
      {rows.map(
        (row: any, i: number) => {
          prepareRow(row);
          return (<RowComponent key={i} row={row} />)
        }
      )}
    </tbody>
  )
}
