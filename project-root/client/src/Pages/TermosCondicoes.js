import React from "react";
import '../Styles/TermosCondicoes.css';

const TermosCondicoes = () => {
  return (
    <div className="terms-body">
      <img src="/LOGO Academico_Viseu_FC_black.svg" alt="Logo" className="terms-brand-logo" />
      <div className="terms-container">
        <h1 className="termos-title">TERMOS E CONDIÇÕES</h1>
        <img src="/LOGO Academico_Viseu_FC_black.svg" alt="Logo" className="terms-title-logo" />
        <section>
          <h2>1. Identificação do Responsável pelo Tratamento</h2>
          <p>O tratamento dos dados pessoais fornecidos na plataforma "Viriatos Scouting" é da responsabilidade do Sport Club Académico de Viseu.</p>
          <ul>
            <li><strong>Entidade Responsável:</strong> Sport Club Académico de Viseu</li>
            <li><strong>NIPC:</strong> 503954306</li>
            <li><strong>Sede:</strong> Estádio Municipal do Fontelo, Avenida Anacleto Pinto, Viseu, Portugal</li>
          </ul>
        </section>

        <section>
          <h2>2. Informação, Consentimento e Finalidade do Tratamento</h2>
          <p>A plataforma "Viriatos Scouting" recolhe e trata dados pessoais de acordo com a Lei da Proteção de Dados Pessoais (Lei 58/2019) e o Regulamento Geral de Proteção de Dados (RGPD - Regulamento UE 2016/679).</p>
          <p>Ao aceitar esta Política de Privacidade e Termos de Utilização, o utilizador consente de forma informada, livre e inequívoca que os dados pessoais sejam tratados pelo Académico de Viseu para:</p>
          <ul>
            <li>Registo e gestão dos dados do atleta;</li>
            <li>Criação de relatórios de desempenho e histórico desportivo do atleta para avaliação e desenvolvimento de talentos no clube.</li>
          </ul>
          <p>Os dados recolhidos não incluem informações sensíveis como convicções políticas, filiação sindical, religião, saúde, ou vida sexual. Estes dados serão exclusivamente utilizados para os fins acima descritos e não serão cedidos a terceiros sem consentimento prévio do titular dos dados.</p>
        </section>

        <section>
          <h2>3. Medidas de Segurança</h2>
          <p>O Académico de Viseu adota medidas técnicas e organizativas para assegurar a proteção dos dados pessoais armazenados na plataforma "Viriatos Scouting", prevenindo acessos não autorizados, perdas ou alterações. Este compromisso de segurança é continuamente atualizado de acordo com a tecnologia disponível e com a natureza dos dados armazenados.</p>
        </section>

        <section>
          <h2>4. Direitos do Titular dos Dados</h2>
          <p>Os utilizadores e/ou encarregados de educação dos atletas poderão, a qualquer momento, exercer os seus direitos de:</p>
          <ul>
            <li>Acesso, retificação, apagamento, limitação do tratamento, portabilidade dos dados e oposição ao tratamento dos dados pessoais.</li>
          </ul>
          <p>Para o exercício destes direitos, os utilizadores devem contactar o Encarregado da Proteção de Dados através do endereço de e-mail indicado.</p>
        </section>

        <section>
          <h2>5. Prazo de Conservação dos Dados</h2>
          <p>Os dados pessoais dos atletas serão mantidos durante o período necessário para o cumprimento dos objetivos da plataforma, nomeadamente para o acompanhamento do histórico e desenvolvimento desportivo. Após este período, e exceto em situações de exigência legal, os dados serão eliminados ou anonimizados.</p>
        </section>

        <section>
          <h2>6. Autoridade de Controlo</h2>
          <p>Em caso de necessidade, os utilizadores poderão apresentar uma reclamação junto da autoridade competente em matéria de proteção de dados pessoais, a Comissão Nacional de Proteção de Dados (CNPD).</p>
        </section>

        <section>
          <h2>7. Alterações à Política de Privacidade</h2>
          <p>O Académico de Viseu reserva-se o direito de atualizar esta Política de Privacidade e Termos de Utilização conforme necessário, sendo qualquer alteração comunicada aos utilizadores através da plataforma "Viriatos Scouting".</p>
        </section>

      </div>
    </div>
  );
};

export default TermosCondicoes;
