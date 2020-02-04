import React from 'react';
import { useTable } from 'react-table'

// Компоненты
import HeaderComponent from './Header';
import BodyComponent from './Body';
import FooterComponent from './Footer';

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
    <table className="striped centered" {...getTableProps()}>
      <HeaderComponent headerGroups={headerGroups} />
      <BodyComponent rows={rows} bodyProps={getTableBodyProps} prepareRow={prepareRow} />
      <FooterComponent />
    </table>
  )
}
