import {StyledTable} from './Table.style'
import TableValue from '../TableValue/TableValue'
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { ExtractData, ExtractDelete } from '../../sevices/MainApi/Extract'

 
export default function Table() {

  const [extractData, setExtractData] = useState([])
  const [initialExtractData, setInitialExtractData] = useState([])
  const [typeValue, setTypeValue] = useState('all')
  
  async function getExtract() {
  
    const response = await ExtractData(typeValue)
    setExtractData(response)
    setInitialExtractData(response)

  } 
  
  function filterTable(event) {
    if (event.target.value === 'all') {
      setExtractData(initialExtractData)
      setTypeValue(event.target.value)
      return 
    } 

    const extractType = event.target.value
    const filteredData = initialExtractData.filter((item)=> item.type === extractType )

    setExtractData(filteredData)

    setTypeValue(event.target.value)
  }

  async function handleDelete(id) {
    
    const response = await ExtractDelete(id)
    
    alert(response)
    window.location.reload()
  }
  
  function renderItem() {
    return extractData.map((item, index) => (
      <TableValue
      key={index}
      description={item.descriptionValue}
      value={item.value || 0}
      type={item.type === "deposit" ? <BsArrowUpCircle color='green'/> : <BsArrowDownCircle color='Red'/>}
      icon={<FaTrash onClick={()=> {handleDelete(item._id)}}/> }
      />   
    ))
  }
  
  useEffect(()=> {
    getExtract()
  }, [])
  
  return (
    
    <StyledTable>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>
            <select name="typeValue"  value={typeValue} onChange={(e) => filterTable(e)}  >
              <option value='all'>Todos</option>
              <option value='deposit' >Entradas</option>
              <option value='withdrawal'>Saídas</option>
            </select>
          </th>
          <th></th>
        </tr>
      </thead>

        <tbody>
      {renderItem()}
      </tbody>
    </StyledTable>
  )
}