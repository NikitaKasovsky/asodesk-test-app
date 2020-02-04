import React from 'react';
import { UseTableRowProps, Cell } from 'react-table';
import { useHistory } from 'react-router-dom';

// Компоненты
import SuggestionComponent from '../modals/Suggestion';

// Перечисления
import { TableItem } from '../../enums/table-item.enum';

interface IRowProps {
  row: UseTableRowProps<object>;
}

export default function RowComponent(props: IRowProps): JSX.Element {
  const { row } = props;
  const history = useHistory();
  const colors = ['#4287f5', '#f5428d', '#1ab051', '#d5de26', '#d9a01a', '#7e0187'];

  const rowGenerator = (cell: Cell): any => {
    const value = cell.row.values || null;

    switch (cell.column.id) {
      case TableItem.Checkbox:
        return (<input type="checkbox" />)
      case TableItem.Explore:
        const keyword: string = value.keyword;
        return (<button onClick={() => history.push(`./explore:${keyword.replace(/ /g, '-')}`)}>explore</button>)
      case TableItem.Show:
        return (<SuggestionComponent />)
      case TableItem.SuggestionsCount:
        return typeof (value.suggestions_count) === 'number' ? value.suggestions_count : '-'
      case TableItem.PositionInfo:
        return `${value.position_info.position} ${value.position_info.change ? '(' + value.position_info.change + ')' : ''}`
      default:
        return cell.render('Cell')
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
