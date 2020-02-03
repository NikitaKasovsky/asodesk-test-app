import React from 'react';
import { useTable } from 'react-table'

// Компоненты
import HeaderComponent from './Header';
import BodyComponent from './Body';

export default function TableComponent(props: any): any {
  const { columns, data } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  })

  return (
    <table {...getTableProps()}>
      <HeaderComponent headerGroups={headerGroups} />
      <BodyComponent rows={rows} bodyProps={getTableBodyProps} prepareRow={prepareRow} />
    </table>
  )
}
