import React from 'react';

interface IPaginattorProps {
  canPrev: Function,
  canNext: Function,
  options: any,
  count: number,
  gotoPage: Function,
  next: Function,
  prev: Function,
  size: Function,
  state: { pageIndex: number, pageSize: number }
}

export const PaginatorComponent: React.FC<IPaginattorProps> = (props: IPaginattorProps) => {
  const {
    canPrev,
    canNext,
    options,
    count,
    gotoPage,
    next,
    prev,
    size,
    state
  } = props
  const { pageIndex, pageSize } = state;

  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPrev}>
        {'<<'}
      </button>{' '}
      <button onClick={() => prev()} disabled={!canPrev}>
        {'<'}
      </button>{' '}
      <button onClick={() => next()} disabled={!canNext}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(count - 1)} disabled={!canNext}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {options.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={e => {
          size(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}
