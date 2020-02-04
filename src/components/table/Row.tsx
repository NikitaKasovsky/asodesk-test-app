import React from 'react';
import { UseTableRowProps, Cell } from 'react-table';

// Компоненты
import SuggestionComponent from '../modals/Suggestion';

interface IRowProps {
  row: UseTableRowProps<object>;
}

export default function RowComponent(props: IRowProps): any {
  const { row } = props;

  const rowGenerator = (cell: Cell): any => {
    // TODO: Поменять на number - type
    switch (cell.column.id) {
      case 'checkbox':
        return (<input type="checkbox" />)
      case 'explore':
        return (<button>explore</button>)
      case 'show':
        return (<SuggestionComponent />)
      default:
        return (cell.render('Cell'))
    }
  }

  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell: Cell) => (
        <td {...cell.getCellProps()}>
          {rowGenerator(cell)}
        </td>
      ))}
    </tr>
  )
}
