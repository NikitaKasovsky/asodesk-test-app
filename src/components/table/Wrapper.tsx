import React, { useEffect } from 'react';

// Стили
import './table.css';

// Компоненты
import Table from './Table';

// Интерфейсы
import { IDataStats } from '../../interfaces/data-stats.interface';

export const WrapperComponent: React.FC = () => {
  const [list, setList] = React.useState()

  // Загружаем список
  useEffect(() => {
    fetch('https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Host': 'hq.asodesk.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '20000',
        'Connection': 'keep-alive'
      },
    })
      .then(response => response.json())
      .then((data: IDataStats) => {
        const list = data.data
        setList(list)
      })
      .catch(err => console.error(err))
  })

  // Колонки таблицы
  const columns = [
    {
      Header: (<input type="checkbox" />),
      accessor: 'checkbox'
    },
    {
      Header: 'Keyword',
      accessor: 'keyword',
    },
    {
      Header: '',
      accessor: 'explore',
    },
    {
      Header: '',
      accessor: 'show',
    },
    {
      Header: 'Traffic Score',
      accessor: 'trafficScore',
    },
    {
      Header: 'Rank',
      accessor: 'rank',
    },
    {
      Header: 'Total Apps',
      accessor: 'totalApps',
    },
    {
      Header: 'Color',
      accessor: 'color',
    },
  ]

  return (
    <div className="content">
      <div className="row">
        <div className="card">
          <Table columns={columns} data={list ? list : []} />
        </div>
      </div>
    </div>
  )
}
