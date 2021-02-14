import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
 
import './style.css'

const InputName = () => {
  const [name, setName] = useState('');

  const hist = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(name){
      hist.push(`/gamequiz?name=${name}`);
    }
  }

  return(
    <form onSubmit={(event) => {handleSubmit(event)}} className='InputName__form'>
      <label className='form__label' for="name"> Qual o seu nome, treinador?</label>
      <input onChange={(event) => {setName(event.target.value)}}className='form__input' id="name" type="text" placeholder="Seu nome aqui" required />
      <button className='form__button' type="submit">Entre na grama</button>
    </form>
  );
}

export { InputName };