import React, { useState } from 'react';

export default function Home(){
    const [origin, setOrigin] = useState();
    const [destiny, setDestiny] = useState('16');
    const [total, setTotal] = useState(0);
    const [time, setTime] = useState(0)
    const [faleMais30, setFaleMais30] = useState(0);
    const [selectFaleMais, setSelectFaleMais] = useState('30');

  
function iniCalc() {

    async function calc() {
      const iniNum = parseFloat(origin)
      const endNum = parseFloat(destiny)
      
      if(iniNum === 11 && endNum === 16) { setTotal(1.90) }
      if(iniNum === 16 && endNum === 11) { setTotal(2.90) }
      if(iniNum === 11 && endNum === 17) { setTotal(1.70) }
      if(iniNum === 17 && endNum === 11) { setTotal(2.70) }
      if(iniNum === 11 && endNum === 18) { setTotal(0.90) }
      if(iniNum === 18 && endNum === 11) { setTotal(1.90) }
    }
    calc();
    
  }

  function faleMais() {
      const numberFaleMais = parseFloat(selectFaleMais)
      const timeNum = parseFloat(time)
      const totalNum = parseFloat(total)
      console.log('teste', numberFaleMais)
      if(numberFaleMais === 30) { timeNum < 31 ? setFaleMais30(0) : setFaleMais30((totalNum * timeNum) * 1.1) }
      if(numberFaleMais === 60) { timeNum < 61 ? setFaleMais30(0) : setFaleMais30((totalNum * timeNum) * 1.1) }
      if(numberFaleMais === 120) { timeNum < 121 ? setFaleMais30(0) : setFaleMais30((totalNum * timeNum) * 1.1) }    
  }
  
  return (
    <div className="title">
      <h1>Telzir - FaleMais</h1>
    <div className="container">
      
      <div className="calcMin">
        <h3 className='title2'>Calcule o preço de sua ligação sem o plano Fale Mais</h3>
        <label>DDD de origem: </label>
        <select onChange={(event) => setOrigin(event.target.value)}>
          <option value=""></option>
          <option value="11" defaultValue>11</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>

        </select>
        
        {
          origin === "11" ? 
          <>
        <label>DDD de destino: </label>
        <select name="destiny" id="" onChange={(event) => setDestiny(event.target.value)}>
          <option value=""></option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>

        </select>
        </>
        : origin === "16" ?
        <>
        <label>DDD de destino: </label>
        <select name="destiny" id="" onChange={(event) => setDestiny(event.target.value)}>
          <option value=""></option>
          <option value="11">11</option>

        </select>
        </>
        : origin === "17" ?
        <>
        <label>DDD de destino: </label>
        <select name="destiny" id="" onChange={(event) => setDestiny(event.target.value)}>
          <option value=""></option>
          <option value="11">11</option>

        </select>
        </>
        : origin === "18" ?
        <>
        <label>DDD de destino: </label>
        <select name="destiny" id="" onChange={(event) => setDestiny(event.target.value)}>
          <option value=""></option>
          <option value="11">11</option>

        </select>
        </> :
        <label>DDD de destino</label>
      }

        <button onClick={() => iniCalc()}>Calcule</button>

        <label>Valor da ligação sem FaleMais: </label>
        {
          total !== undefined ? <input type="text" value={`R$${total}`}/> 
          : <input type="text" value={`R$0,00`}/> 
        }
      </div>
        <div className="calcFale">
          
        <h3 className='title1'>Calcule o preço da sua ligação com FaleMais</h3>

      <label>Preencha quantidade de minutos: </label>
      <input type="number" value={time} onChange={(event) => setTime(event.target.value)}/>
      
      
      <label>Selecione o seu Plano FaleMais</label>
      <select name="selectFaleMais" onChange={(event) => setSelectFaleMais(event.target.value)}>
        <option value="30">FaleMais30</option>
        <option value="60">FaleMais60</option>
        <option value="120">FaleMais120</option>
      </select>
      <button onClick={() => faleMais()}>{ `Calcule o preço com FaleMais${parseFloat(selectFaleMais)}` }</button>
      
      <label>{`Valor da ligação com FaleMais${parseFloat(selectFaleMais)} `}</label>
      {
        faleMais30 !== undefined ? <input type="text" value={`R$${faleMais30}`}/>
        : <input type="text" value={`R$0,00`}/>
      }
      
      </div>
    </div>
  </div>
  )
} 

