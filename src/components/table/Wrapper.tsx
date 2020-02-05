import React, { useEffect, useState } from 'react';

// Стили
import './table.css';

// Компоненты
import Table from './Table';
import Loader from '../root/Loader';

// Интерфейсы
import { IDataStats } from '../../interfaces/data-stats.interface';
import { Row } from 'react-table';

// Перечисления
import { TableItem } from '../../enums/table-item.enum';
import { CheckboxComponent } from '../shared/checbox';

// Адрес, с которого запрашиваем данные
const URL = 'https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats';

declare var confirm: (question: string) => boolean;

export const WrapperComponent: React.FC = () => {
  const [list, setList] = useState();
  const [item, setItems] = useState<Row[]>([])
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
    {
      Header: () => (<CheckboxComponent />),
      id: 'checkbox',
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
      Header: () => (<></>),
      id: 'deleteId',
      Cell: () => (<i className="material-icons">delete</i>)
    }
  ]

  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Вы уверены, что хотите удалить элемент?')
    if (shoudRemove) {
      setItems(prev => prev.filter((item: any) => item.id !== id))
    }
  }

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
