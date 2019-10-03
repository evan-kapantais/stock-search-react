import React from 'react'
import './Form.css'

const Form = () => (     
  <form className="stock-form">
    <label htmlFor="stock-symbol"></label>
    <input type="text" placeholder="Symbol" id="stock-symbol" />
    <label htmlFor="stock-amount"></label>
    <input type="number" placeholder="Amount" id="stock-amount" />
    <button>Add</button>
  </form>
)


export default Form;