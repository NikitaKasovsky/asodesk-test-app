import React from 'react';

interface IGlobalSearchProps {
  globalFilter: any,
  setGlobalFilter: (value: any) => void
}

export const GlobalSearchComponent: React.FC<IGlobalSearchProps> = (props: IGlobalSearchProps) => {
  const { globalFilter, setGlobalFilter } = props;

  return (
    <>
      <span>
        Search:{' '}
        <input
          value={globalFilter || ''}
          onChange={event => {
            setGlobalFilter(event.target.value || undefined)
          }}
        />
      </span>
    </>
  )
}
