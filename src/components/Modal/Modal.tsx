import { useState } from 'react';
import './index.scss'

type ModalProps = {
  title: string,  
  text: string,
  textButtonA: string,
  textButtonB: string,
  setTask: any
};

const Modal = ({title, text, textButtonA, textButtonB, setTask }: ModalProps) => {

    const [value, setValue] = useState('')

    const handleChange = (e: any) => {
       setValue(e.target.value)
    }
    
    const addTask = () => {
        setTask((preveState: any) => {
            return [...preveState, value]
        })
        setValue('')
    }

    return (
        <div className='modal'>
        <p>{title}</p>
        <input placeholder={text} name='nome' id='nome' onChange={handleChange} value={value}></input>

        <div className='modal__button'>
            <div>
                <button>{textButtonA}</button>
            </div>
            
            <div>
                <button onClick={addTask} className='modal__estilo'>{textButtonB}</button>
            </div>
        </div>
        </div>
    );
};

export default Modal;
