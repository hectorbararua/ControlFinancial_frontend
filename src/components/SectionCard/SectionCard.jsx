import {StyledSection} from './SectionCard.style'
import CardBox from '../CardBox/CardBox.jsx'
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import {MdOutlineAttachMoney} from "react-icons/md";
import { useState, useEffect } from 'react';
import  { AccountData }  from '../../sevices/MainApi/Account';

export default function SectionCard() {

  const [balence, SetBalence] = useState([''])
  const [entryTotal, SetEntryTotal] = useState([])
  const [outputTotal, SetOutputTotal] = useState([])


  async function getAccount() {

    const response = await AccountData()

    const {balence, outputTotal, entryTotal} = response
    
    SetBalence(balence)
    SetOutputTotal(outputTotal)
    SetEntryTotal(entryTotal)
  }

  useEffect(()=> {
    getAccount()
  }, [])

  return (
    <StyledSection>
      <CardBox  
      title="Entradas"
      icon= {<BsArrowUpCircle/>}
      value={entryTotal}
      />

      <CardBox 
      title="Saídas"
      icon={<BsArrowDownCircle/>}
      value={outputTotal}
      />

      <CardBox 
      title="Total"
      icon={<MdOutlineAttachMoney/>}
      value={balence}
      />
    </StyledSection>
  )

}