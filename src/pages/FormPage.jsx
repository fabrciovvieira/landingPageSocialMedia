import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './FormPage.css'


const FormPage = () => {
    const [sent, setSent] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setSent(true)
    }


  return (
    <div className='container-form'>
        {!sent ? (
            <div className="form">
                <div className="headForm">
                    <div className="txtHeader">
                        <p>Me conte mais sobre seu negócio!</p>
                        <p>suamarca.com</p>
                    </div>
                    <div className="lineForm"></div>
                </div>
                <form>
                <div className="form-group">
                    <label htmlFor="name">Nome <span>*</span></label>
                    <input type="text" id="name" name="name" placeholder="Seu Nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" id="email" name="email" placeholder="Seu Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">WhatsApp <span>*</span></label>
                    <input type="tel" id="phone" name="phone" placeholder="Seu Número de WhatsApp" />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram">Instagram <span>*</span></label>
                    <input type="text" id="instagram" name="instagram" placeholder="@seuinstagram" />
                </div>
                <div className="form-group">
                    <label htmlFor="business">Qual o seu nicho? <span>*</span></label>
                    <input type="text" id="business" name="business" placeholder="Deserceva seu nicho" />
                </div>
                <div className="form-group">
                    <label htmlFor="target-audience">Quem é seu público-alvo? <span>*</span></label>
                    <textarea id="target-audience" name="target-audience" rows="4" placeholder="Descreva seu público-alvo"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="inspirations">Quais os perfis que você se inspira?</label>
                    <textarea id="target-audience" name="target-audience" rows="4" placeholder="Coloque o @ dos perfis que você se inspira"></textarea>
                </div>
                <div className="formBtns">
                    <button onClick={handleClick} className='btnForm' type="submit">Enviar</button>
                    <Link to='/'>
                        <button className='btnBack' type="submit">Voltar pra Home</button>
                    </Link>
                </div>
                </form>
            </div>
        ):(
            <div className="sentForm">
                <h2>Formulário enviado com sucesso!</h2>
                <p>Logo iremos te mandar uma mensagem no seu WhatsApp.</p>
                <Link to='/'>
                    <button className='btnBack' type="submit">Voltar pra Home</button>
                </Link>
            </div>
        )}

    </div>
  )
}

export default FormPage
