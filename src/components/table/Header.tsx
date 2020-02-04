import React from 'react';
import { HeaderGroup, ColumnInstance } from 'react-table';

interface IHeaderProps {
  headerGroups: HeaderGroup[]
}

export default function HeaderComponent(props: IHeaderProps): any {
  const headerGroups: HeaderGroup[] = props.headerGroups;

  return (
    <thead>
      {headerGroups.map((header: HeaderGroup) => (
        <tr {...header.getHeaderGroupProps()}>
          {header.headers.map((column: ColumnInstance) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
