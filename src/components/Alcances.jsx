import React from 'react'
import profile from '../../public/profile.png'
import './Alcances.css'
import { RiUserFollowFill } from "react-icons/ri";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";



const Alcances = () => {
  return (
    <div className='container-alcance'>
        <div className="infoAlcances">
            <h2>Impulsione sua marca nas redes sociais.</h2>
            <p>Quer impulsionar sua marca? Estou aqui para ajudar! Conquiste sucesso nas redes sociais com estratégias personalizadas e eficazes.</p>
            <button className='btn'>Vamos bater um papo?</button>
        </div>
        <div className="imageAlcance">
            <img src={profile} alt="foto do instagram" />
        </div>
        <div className="infoAlcances">
            <div className="dadosAlcance">
                <h2><RiUserFollowFill />+100K</h2>
                <p>Conquistei mais de 100k seguidores para marcas, aumentando sua presença online e influência nas redes sociais.</p>
            </div>
            <div className="dadosAlcance">
                <h2><BsCameraReelsFill />+1M</h2>
                <p>Desenvolvi conteúdo que alcançou mais de 1 milhão de visualizações, aumentando a visibilidade e reconhecimento das marcas online.</p>
            </div>
            <div className="dadosAlcance">
                <h2><FaPaperPlane />+80K</h2>
                <p>Gerenciei campanhas que resultaram em mais de 80k encaminhamentos, impulsionando o alcance e engajamento das marcas.</p>
            </div>
        </div>
    </div>
  )
}

export default Alcances