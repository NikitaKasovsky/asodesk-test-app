import React from 'react';
import { UseTableRowProps, Cell } from 'react-table';
import { useHistory } from 'react-router-dom';

// Компоненты
import { SuggestionComponent } from '../modals/Suggestion';

// Перечисления
import { TableItem } from '../../enums/table-item.enum';

interface IRowProps {
  row: UseTableRowProps<object>;
}

export default function RowComponent(props: IRowProps): JSX.Element {
  const { row } = props;
  const history = useHistory();
  const styles = (color: string) => {
    return {
      height: '25px',
      width: '25px',
      backgroundColor: `${color}`,
      margin: 'auto'
    }
  }
  const colors = ['#4287f5', '#f5428d', '#1ab051', '#d5de26', '#d9a01a', '#7e0187'];
  const rank = (position: number, change: number): JSX.Element => {
    const pos = `${position}`
    const styes = {
      pos: {
        display: 'flex',
        justifyContent: 'center'
      },
      red: {
        color: 'red'
      },
      green: {
        color: 'green'
      }
    }

    return (
      <>
        {change && change < 0
          ? <div style={styes.pos}>{pos}<div style={styes.red}>({change})</div></div>
          : <div style={styes.pos}>{pos}<div style={styes.green}>{change ? '(' + change + ')' : ''}</div></div>}
      </>
    )
  }

  const rowGenerator = (cell: Cell): any => {
    const value = cell.row.values || null;
    const suggestionsCount = typeof (value.suggestions_count) === 'number' ? value.suggestions_count : '-';

    switch (cell.column.id) {
      case TableItem.Explore:
        const keyword: string = value.keyword;
        return (<button onClick={() => history.push(`./explore:${keyword.replace(/ /g, '-')}`)}>explore</button>)
      case TableItem.SuggestionsCount:
        return (<SuggestionComponent suggestionsCount={suggestionsCount} />)
      case TableItem.PositionInfo:
        return rank(value.position_info.position, value.position_info.change)
      case TableItem.Color:
        return (<div style={styles(colors[cell.row.values.color])}></div>)
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
