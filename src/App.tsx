import Background from "./assets/Background.jpg";
import BB8 from "./assets/BB8.png";
import FINN from "./assets/FINN.png";
import "./styles/global.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
    <div className="body">
    <div className="container">
      <input type="radio" id="s1" name="slider" className="hidden" />
      <input type="radio" id="s2" name="slider" className="hidden"checked/>
      <input type="radio" id="s3" name="slider" className="hidden"/>

      <div className="flex cards">
          <label htmlFor="s1" id="slide1">
          <Card
            title="Finn"
            description="Finn foi criado desde criança para se tornar um soldado da Primeira Ordem, mas desertou e se juntou à Resistência em busca de liberdade e justiça."
            film="The Force Awakens, The Last Jedi & The Rise of Skywalker"
            species="Humano"
            height="1,75 m"
            local="Indefinido"
            weapon="Blaster EL-16, Sabre de luz"
            imageUrl={FINN}
          />
          </label>
          <label htmlFor="s3" id="slide3">
          <Card
            title="BB8"
            description="Era um pequeno dróide astromecânico. Mas acabou tornando-se um valioso membro da equipe de resistência e ajudando a salvar a galáxia de muitas ameaças."
            film="The Force Awakens, The Last Jedi & The Rise of Skywalker"
            species="Dróide Astromecânico"
            height="67,3 cm"
            local="Baktoid Combat Automata"
            weapon="Nenhuma"
            imageUrl={BB8}
          />
          </label>
          <label htmlFor="s2" id="slide2">
          <Card
            title="Rey Skywalker"
            description="Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker."
            film="The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of Destiny"
            species="Humana"
            height="1,70 m"
            local="Jakku"
            weapon="Sabre de luz, Blaster, Quarterstaff"
            imageUrl={Background}
          />
          </label>
          
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
