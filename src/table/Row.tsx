import React from 'react';

export default function RowComponent(props: any): any {
  const { row } = props;

  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell: any) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
    </tr>
  )
}
