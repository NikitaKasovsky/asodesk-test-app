import React from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';

// Компоненты
import HeaderComponent from './Header';
import BodyComponent from './Body';
import FooterComponent from './Footer';
import { PaginatorComponent } from './Paginator';

interface TableProps {
  columns: any[],
  data: any[],
}

export default function TableComponent(props: TableProps): JSX.Element {
  const { columns, data } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    flatColumns,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable({
    initialState: { pageIndex: 0, pageSize: 10 },
    columns,
    data,
    filterTypes: {},
  },
    useGlobalFilter,
    usePagination,
  )

  return (
    <React.Fragment>
      <table className="striped centered" {...getTableProps()}>
        <HeaderComponent
          flatColumns={flatColumns}
          headerGroups={headerGroups}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <BodyComponent page={page} bodyProps={getTableBodyProps} prepareRow={prepareRow} />
        <FooterComponent />
      </table>
      <PaginatorComponent
        canPrev={canPreviousPage}
        canNext={canNextPage}
        options={pageOptions}
        count={pageCount}
        gotoPage={gotoPage}
        next={nextPage}
        prev={previousPage}
        size={setPageSize}
        state={{ pageIndex, pageSize }}
      />
    </React.Fragment>
  )
}
