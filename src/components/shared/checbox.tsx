import React from 'react';

export const CheckboxComponent: React.FC = () => {

  return (
    <p>
      <label>
        <input type="checkbox" />
        <span></span>
      </label>
    </p>
  )
}

// import React, { useEffect } from 'react';
// import { TableToggleAllRowsSelectedProps } from 'react-table';

// export const CheckboxComponent: React.FC<TableToggleAllRowsSelectedProps> = (
//   { indeterminate, ...rest }, ref
// ) => {
//   const defaultRef = React.useRef()
//   const resolvedRef = ref || defaultRef

//   useEffect(() => {
//     resolvedRef.current.indeterminate = indeterminate
//   }, [resolvedRef, indeterminate])

//   return (
//     <p>
//       <label>
//         <input type="checkbox" ref={resolvedRef} {...rest} />
//         <span></span>
//       </label>
//     </p>
//   )
// }