import React, { useEffect, useState } from 'react';
import { CellProps } from 'react-table';

// Стили
import './table.css';

// Компоненты
import Table from './Table';
import Loader from '../root/Loader';

// Интерфейсы
import { IDataStats } from '../../interfaces/data-stats.interface';

// Перечисления
import { TableItem } from '../../enums/table-item.enum';
import { CheckboxComponent } from '../shared/checbox';

// Адрес, с которого запрашиваем данные
const URL = 'https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats';

declare var confirm: (question: string) => boolean;

export const WrapperComponent: React.FC = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = React.useState(true);

  // Загружаем список
  useEffect(() => {
    fetch(URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Host': 'hq.asodesk.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '1000',
        'Connection': 'keep-alive'
      },
    })
      .then(response => response.json())
      .then((value: IDataStats) => {
        const list = value.data;
        setList(list);
        setLoading(false);
      })
      .catch(err => console.error(err))
  }, [])

  // Колонки таблицы
  const columns = [
    // TODO: тут наткнулся на проблему
    // {
    //   id: "selection",
    //   Header: (header: HeaderProps<any>) => {
    //     console.log(typeof (header));
    //     console.log(typeof (header.getToggleAllRowsSelectedProps))
    //     return (
    //       <div>
    //         <input type="checkbox" {...header.getToggleAllRowsSelectedProps()} />
    //       </div>
    //     )
    //   },
    //   Cell: ({ row }: CellProps<any>) => {
    //     return (
    //       <div>
    //         <input type="checkbox" {...row.getToggleRowSelectedProps()} />
    //       </div>
    //     )
    //   }
    // },
    {
      id: 'seelction',
      Header: () => (<CheckboxComponent />),
      Cell: () => (<CheckboxComponent />)
    },
    {
      Header: 'Keyword',
      accessor: TableItem.Keyword,
    },
    {
      Header: '',
      accessor: TableItem.Explore,
    },
    {
      Header: '',
      accessor: TableItem.SuggestionsCount,
    },
    {
      Header: 'Traffic Score',
      accessor: TableItem.UsersPerDay,
    },
    {
      Header: 'Rank',
      accessor: TableItem.PositionInfo,
    },
    {
      Header: 'Total Apps',
      accessor: TableItem.TotalApps,
    },
    {
      Header: 'Color',
      accessor: TableItem.Color,
    },
    {
      Header: '',
      id: 'delete',
      accessor: () => 'delete',
      Cell: (item: CellProps<any>) => (
        <i style={{ cursor: 'pointer', color: 'darkgrey' }} onClick={() => {
          const shoudRemove = confirm('Вы уверены, что хотите удалить элемент?')
          if (shoudRemove) {
            let data = list;
            data.splice(item.row.id, 1);
            setList((prev: any) => prev.filter((val: any) => val.id !== item.row.id));
          }
        }} className="material-icons">delete</i>
      )
    }
  ]

  return (
    <React.Fragment>
      {loading ? <Loader /> :
        <div className="row">
          <div className="card">
            <Table columns={columns} data={list ? list : []} />
          </div>
        </div>}
    </React.Fragment>
  )
}
