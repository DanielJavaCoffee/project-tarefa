import './index.scss'

type ModalProps = {
  title: string,  
  text: string,
  textButtonA: string,
  textButtonB: string
};

const Modal = ({title, text, textButtonA, textButtonB }: ModalProps) => {

    return (
        <div className='modal'>
        <p>{title}</p>
        <input placeholder={text} name='nome' id='nome'></input>

        <div className='modal__button'>
            <div>
                <button>{textButtonA}</button>
            </div>
            
            <div>
                <button className='modal__estilo'>{textButtonB}</button>
            </div>
        </div>
        </div>
    );
};

export default Modal;
