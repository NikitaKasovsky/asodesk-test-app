import React from 'react';
import { Row, UseTableRowProps } from 'react-table';

import RowComponent from './Row';

interface IBodyProps {
  bodyProps: Function,
  prepareRow: Function,
  page: Row[]
}

export default function BodyComponent(props: IBodyProps): any {
  const { bodyProps, prepareRow, page } = props;

  return (
    <tbody {...bodyProps()}>
      {page.map(
        (row: UseTableRowProps<object>, i: number) => {
          prepareRow(row);
          return (<RowComponent key={i} row={row} />)
        }
      )}
    </tbody>
  )
}
