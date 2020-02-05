import React from 'react';
import { HeaderGroup, ColumnInstance } from 'react-table';
import { GlobalSearchComponent } from './GlobalSearch';

interface IHeaderProps {
  headerGroups: HeaderGroup[],
  globalFilter: any,
  flatColumns: ColumnInstance[],
  setGlobalFilter: (value: any) => void
}

export default function HeaderComponent(props: IHeaderProps): JSX.Element {
  const { headerGroups, globalFilter, setGlobalFilter, flatColumns } = props;

  return (
    <thead>
      {headerGroups.map((header: HeaderGroup) => (
        <tr {...header.getHeaderGroupProps()}>
          {header.headers.map((column: ColumnInstance) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      <tr>
        <th colSpan={flatColumns.length}>
          <GlobalSearchComponent
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </th>
      </tr>
    </thead>
  )
}
