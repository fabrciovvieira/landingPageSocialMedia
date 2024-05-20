import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import isa from '../../public/isa.png'
import { FaWhatsapp } from "react-icons/fa";
import Alcances from '../components/Alcances';
import Servicos from '../components/Servicos/Servicos';
import More from '../components/moreUs/More';



const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="textoHome">
        <h2>
          Deixe seu negócio mais poderoso comigo.
        </h2>
        <p>
        Impulsione sua presença online com estratégias únicas e criativas. Transforme seu perfil em um ímã de seguidores e clientes em poucos dias.
        </p>
        <Link to='/form'><button className='btn'>Obter um Orçamento</button></Link>
        <span>Assista agora como podemos te ajudar</span>
      </div>
      <div className="imgHome">
        <img src={isa} alt="foto da isa" />
      </div>
    </div>
    <div className="linkWhatsApp">
      <FaWhatsapp className='iconeWpp'/>
      <p>Interessado nos nossos serviços? Entre em contato com a gente agora!</p>
    </div>
    <Alcances /> 
    <Servicos />
    <More />
    </>
  )
}

export default Home