import React from 'react'
import './moreUs/More.css'
import { FcLike } from "react-icons/fc";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <div className="contactUs">
      <FcLike className='heart'/>
      <h3>Entre em contato com a gente!</h3>
      <p>Estou aqui para transformar sua presença nas redes sociais em uma poderosa ferramenta de crescimento para o seu negócio. Vamos trabalhar juntos para impulsionar sua marca e alcançar novos patamares de sucesso.</p>
      <div className="icones">
          <FaInstagram className='iconeContato'/>
          <FaWhatsapp className='iconeContato'/>
          <FaTiktok className='iconeContato'/>
          <MdOutlineMailOutline className='iconeContato'/>
      </div>
      <div className="formMsg">
          <textarea placeholder='Envie uma mensagem no nosso WhatsApp'></textarea>
          <button>Enviar</button>
      </div>
</div>
  )
}

export default Footer