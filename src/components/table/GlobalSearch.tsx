import React from 'react';

interface IGlobalSearchProps {
  globalFilter: any,
  setGlobalFilter: (value: any) => void
}

export const GlobalSearchComponent: React.FC<IGlobalSearchProps> = (props: IGlobalSearchProps) => {
  const { globalFilter, setGlobalFilter } = props;
  const styles = {
    main: {
      display: 'flex',
      alignItems: 'center',
      padding: '4px 20px'
    },
    input: {
      width: '100%',
      height: '25px',
      marginLeft: '18px'
    }
  }

  return (
    <div style={styles.main}>
      Search:{' '}
      <input
        style={styles.input}
        value={globalFilter || ''}
        onChange={event => {
          setGlobalFilter(event.target.value || undefined)
        }}
      />
    </div>
  )
}
