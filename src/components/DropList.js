import React from 'react';

const DropList = (props) => (
  <datalist id="stock-list">
    {
      props.symbols.map((item, index) => (
        <option
          key={index}
          value={item}>
            {item}
        </option>
      ))
    }
  </datalist>
)

export default DropList;