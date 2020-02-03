import React from 'react';

// Стили
import './table.css';

// Компоненты
import Table from './Table';

export default function ContentComponent(): any {

  // Моки для таблицы
  const mock = [
    { id: 1, keyword: 'uber', trafficScore: '12321', rank: '123', totalApps: '412', color: 'red' },
    { id: 2, keyword: 'auto', trafficScore: '3214', rank: '1', totalApps: '541', color: 'green' },
    { id: 3, keyword: 'taxi', trafficScore: '12344', rank: '323', totalApps: '12', color: 'blue' }
  ]

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
    <div className="wrapper-table">
      <div className="content">
        <Table columns={columns} data={mock} />
      </div>
    </div>
  )
}
