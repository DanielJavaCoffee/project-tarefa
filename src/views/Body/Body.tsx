import "./index.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function Body() {
    const [showModal, setShowModal] = useState(false);

    const [tasks, setTasks] = useState<string[]>([]);

    function isVisible() {
        setShowModal(true);
        const div01 = document.getElementById('div01');
        if (div01) div01.style.display = 'none';  
    }

    return (
        <section className='body'>
            <div className="body__text">
                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            </div>
            <div className="body__div01" id="div01">
                <ul>
                    <li>Tarefa</li>
                    <li>Status</li>
                    <li>Opções</li>
                </ul>
            </div>

            <div className="body__div02" id="div02">
                {tasks.length === 0 ? (
                    <button onClick={isVisible}>Vamos realizar Tarefas!</button>
                ) : (

                    <ul>
                        {tasks.map((tarefa, index) => (
                            <li key={index}>{tarefa}</li>
                        ))}
                    </ul>
                )}
                { showModal && <Modal 
                                title="Digite o Nome Da Tarefa." 
                                text="Colocar as descrições das tarefas aqui."
                                textButtonA="Desistir"
                                textButtonB="Salvar"
                                setTask={setTasks}
                                />
                }
            </div>
        </section>
    );
}

export default Body;