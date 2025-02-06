import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AppSite.css";


const data = [
  {
    text1: (
      <>
        <span className="text-wrapper">Faça </span>
        <span className="span">download</span>
        <span className="text-wrapper">
          da app Viriatos Scouting. Registe e acompanhe a evolução dos novos
          talentos do Académico de Viseu. Tudo na palma da sua mão!
        </span>
      </>
    ),
    text2: "",
    imageSrc: "../img/mao.png",
    circleColors: ["#ffd201", "#ffffff", "#ffffff"],
    showImage: true,
  },
  {
    text1: (
      <>
        <span className="text-wrapper-5">Faça download da App</span>
        <span className="text-wrapper">
          Disponível para dispositivos móveis. A app é fácil de usar e acessível.
        </span>
      </>
    ),
    text2: (
      <>
        <span className="text-wrapper-5">Busca fácil de jogadores</span>
        <span className="text-wrapper">
          A pesquisa é intuitiva e prática. Filtre jogadores por escalão e posição.
        </span>
      </>
    ),
    imageSrc: "../img/telele-1 (1).png",
    circleColors: ["#ffffff", "#ffd201", "#ffffff"],
    showImage: true,
  },
  {
    text1: (
      <>
        O Viriatos Scouting é uma aplicação dedicada ao apoio no processo de scouting do
        Académico de Viseu, focando na identificação e acompanhamento de jovens talentos
        promissores. Criado para dar suporte à formação e ao desenvolvimento de novos
        jogadores, a app permite que observadores registem dados e acompanhem o progresso
        de atletas que podem vir a compor o futuro do futebol português.
      </>
    ),
    text2: "",
    imageSrc: "",
    circleColors: ["#ffffff", "#ffffff", "#ffd201"],
    showImage: false,
  },
];

export default function ViriatosScouting() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (event) => {
    if (isScrolling) return;
    setIsScrolling(true);

    const isScrollForward = event.deltaY > 0;
    setCurrentIndex((prevIndex) =>
      isScrollForward ? (prevIndex + 1) % data.length : (prevIndex - 1 + data.length) % data.length
    );

    setTimeout(() => setIsScrolling(false), 500);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="webpage">
      <div className="mega-overlap-wrapper">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="titulo">
              <div className="overlap-group">
                <div className="cachecol">
                  <div className="div">
                    <div className="overlap-group-2">
                      <p className="fa-a-download-da-app">{data[currentIndex].text1}</p>
                      {data[currentIndex].text2 && (
                        <p className="fa-a-download-da-app">{data[currentIndex].text2}</p>
                      )}
                    </div>
                    <div className="text-wrapper-2">DOWNLOAD NOW</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="logo" src="img/logo.svg" alt="Logo" />
            <div className="circulos">
              {data[currentIndex].circleColors.map((color, i) => (
                <div key={i} style={{ backgroundColor: color }}></div>
              ))}
            </div>
            {data[currentIndex].showImage && (
              <img className="mao" src={data[currentIndex].imageSrc} alt="Mão" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
