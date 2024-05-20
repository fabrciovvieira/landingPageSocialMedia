import React from 'react'
import { FaCheck } from "react-icons/fa";
import foto from '../../../public/fotoIsa.png'
import './More.css'




const More = () => {
  return (
    <div className='container-more'>
        <div className="topMore">
            <div className="moreImg">
                <div className="cicleMore"></div>
                <img src={foto} alt="" />
            </div>
            <div className="categoryMore">
                <div className="headCategory">
                    <h3>Razões do porquê você deveria escolher a gente</h3>
                    <p>Nós compartilhamos tendências e estratégias comuns para impulsionar sua receita e garantir que sua presença nas redes sociais esteja sempre em alta demanda.</p>
                </div>
                <div className="details">
                    <span><FaCheck />Totalmente Adaptado</span>
                    <span><FaCheck />Layouts Bonitos</span>
                    <span><FaCheck />Estratégia Digital</span>
                    <span><FaCheck />Engajamento Criativo</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default More