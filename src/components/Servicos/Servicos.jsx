import React from 'react'
import './Servicos.css'
import ft1 from '../../../public/Rectangle.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Servicos = () => {
  return (
    <div className='container-Servicos'>
        <div className="headServicos">
            <h2>Serviços que oferecemos pra você</h2>
            <p>Com uma abordagem personalizada para gestão de redes sociais, ofereço serviços abrangentes para elevar sua presença online. Desde a criação de conteúdo até o engajamento com a audiência.</p>
        </div>
        <div className="allServicos">
            <div className="contentServicos">
                <div className="typeServico">
                    <div className="descServico">
                        <h3>Gestão de Redes Sociais</h3>
                    </div>
                    <div className="descServico">
                        <img src={ft1} alt="" />
                    </div>
                    <div className="descServico">
                        <p>Criação e publicação de conteúdo relevante e atraente, interação com a audiência, monitoramento de métricas de desempenho e estratégias para aumentar o engajamento e a visibilidade da marca nas redes sociais.</p>
                    </div>
                    <span className='more'>Fale com a gente <FaLongArrowAltRight /></span>
                </div>
            </div>
            <div className="contentServicos">
                <div className="typeServico">
                    <div className="descServico">
                        <h3>Campanhas de Publicidade em Redes Sociais</h3>
                    </div>
                    <div className="descServico">
                        <img src={ft1} alt="" />
                    </div>
                    <div className="descServico">
                        <p>Desenvolvimento e execução de campanhas pagas em plataformas como Facebook, Instagram, Twitter e LinkedIn para alcançar um público-alvo específico, aumentar o reconhecimento da marca, gerar leads e impulsionar as vendas.</p>
                    </div>
                    <span className='more'>Fale com a gente <FaLongArrowAltRight /></span>
                </div>
            </div>
            <div className="contentServicos">
                <div className="typeServico">
                    <div className="descServico">
                        <h3>Análise de Dados e Relatórios</h3>
                    </div>
                    <div className="descServico">
                        <img src={ft1} alt="" />
                    </div>
                    <div className="descServico">
                        <p>Coleta, análise e interpretação de dados das redes sociais para avaliar o desempenho das campanhas, identificar tendências, entender o comportamento do público-alvo e fornecer insights acionáveis para otimizar as estratégias de marketing.</p>
                    </div>
                    <span className='more'>Fale com a gente <FaLongArrowAltRight /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicos