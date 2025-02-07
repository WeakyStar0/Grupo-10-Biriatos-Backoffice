import React from "react";
import '../Styles/TermosCondicoes.css'

const TermosCondicoes = () => {
  return (
    <div className="terms-body">
      <img src="/LOGO Academico_Viseu_FC_black.svg" alt="Logo" className="terms-brand-logo" />
      <div className="terms-container">
        <h1>Política de Privacidade e Termos de Utilização</h1>
        <section>
          <h2>1. Identificação do Responsável pelo Tratamento</h2>
          <p>O tratamento dos dados pessoais fornecidos na plataforma "Viriatos Scouting" é da responsabilidade do Sport Club Académico de Viseu.</p>
          <ul>
            <li><strong>Entidade Responsável:</strong> Sport Club Académico de Viseu</li>
            <li><strong>NIPC:</strong> 503954306</li>
            <li><strong>Sede:</strong> Estádio Municipal do Fontelo, Avenida Anacleto Pinto, Viseu, Portugal</li>
            <li><strong>Contacto do Encarregado da Proteção de Dados (EPD):</strong> epd.protecaodedados@aima.gov.pt.</li>
            <br></br>
          </ul>
        </section>
        <section>
          <h2>2. Informação, Consentimento e Finalidade do Tratamento</h2>
          <p>A plataforma "Viriatos Scouting" recolhe e trata dados pessoais de acordo com a Lei da Proteção de Dados Pessoais (Lei 58/2019) e o RGPD.</p>
          <p>Ao aceitar esta política, o utilizador consente que os dados pessoais sejam tratados pelo Académico de Viseu para:</p>
          <ul>
            <li>Registo e gestão dos dados do atleta</li>
            <li>Criação de relatórios de desempenho e histórico desportivo</li>
            <br></br>
          </ul>
        </section>
        <section>
          <h2>3. Medidas de Segurança</h2>
          <p>O Académico de Viseu adota medidas técnicas e organizativas para assegurar a proteção dos dados pessoais armazenados.</p>
          <br></br>
        </section>
        <section>
          <h2>4. Direitos do Titular dos Dados</h2>
          <p>Os utilizadores poderão, a qualquer momento, exercer os seus direitos de:</p>
          <ul>
            <li>Acesso, retificação, apagamento, limitação do tratamento, portabilidade dos dados e oposição.</li>
          </ul>
          <p>Para exercer estes direitos, devem contactar o Encarregado da Proteção de Dados.</p>
          <br></br>
        </section>
        <section>
          <h2>5. Prazo de Conservação dos Dados</h2>
          <p>Os dados serão mantidos pelo período necessário para os objetivos da plataforma e depois eliminados ou anonimizados.</p>
          <br></br>
        </section>
        <section>
          <h2>6. Autoridade de Controlo</h2>
          <p>Os utilizadores poderão apresentar reclamações junto da CNPD.</p>
          <br></br>
        </section>
        <section>
          <h2>7. Alterações à Política de Privacidade</h2>
          <p>O Académico de Viseu reserva-se o direito de atualizar esta política e comunicará qualquer alteração aos utilizadores.</p>
        </section>
        <br></br>
      </div>
    </div>
  );
};

export default TermosCondicoes;


