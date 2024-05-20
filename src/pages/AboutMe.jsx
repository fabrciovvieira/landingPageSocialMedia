import React from 'react'
import fotoSobre from '../../public/fotoSobre1.png'
import fotoSobre3 from '../../public/fotoSobre3.png'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
    <div className='container-Sobre'>
      <div className="textoSobre">
        <div className="apresentaSobre">
          <h1>Olá, somos a</h1>
          <h1 className='ola'>Sua marca</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eaque, amet, magnam ab odio numquam autem quidem similique fugit, reprehenderit ex. Aut similique, magnam odio optio ea unde porro earum?</p>
          <button className="btn">Contratar nós</button>
        </div>
        <div className="dadosDetails">
          <div className="dadosSobre">
            <h2>+20</h2>
            <span>Clientes Satisfeitos</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos adipisci, tempore consequuntur earum quidem incidunt ipsam quo quam cupiditate voluptatum libero.</p>
          </div>
          <div className="dadosSobre">
            <h2>+1M</h2>
            <span>De Vizualizações</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos adipisci, tempore consequuntur earum quidem incidunt ipsam quo quam cupiditate voluptatum libero.</p>
          </div>
        </div>
      </div>
      <div className="imgSobre">
        <img src={fotoSobre} alt="" />
      </div>
    </div>
    <div className="footerSobre">
      <div className="imageSobreFinal">
        <img src={fotoSobre3} alt="" />
      </div>
      <div className="textoFinal">
        <h2>Lorem ipsum dolor sit</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio corporis beatae aliquam impedit repudiandae veniam libero qui non sunt porro quasi, dolore accusantium est dignissimos tempore, blanditiis perferendis obcaecati consectetur?</p>
      </div>
    </div>
    </>
  )
}

export default AboutMe