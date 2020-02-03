import React from 'react';
import { Row, UseTableRowProps } from 'react-table';

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
        (row: UseTableRowProps<object>, i: number) => {
          prepareRow(row);
          return (<RowComponent key={i} row={row} />)
        }
      )}
    </tbody>
  )
}
