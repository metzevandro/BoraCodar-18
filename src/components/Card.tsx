interface CardProps {
  title: string;
  description: string;
  film: string;
  species: string;
  height: string;
  local: string;
  weapon: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  film,
  species,
  height,
  local,
  weapon,
  imageUrl,
}) => (
  <>
    <img className="image" src={imageUrl} alt={title} />
    <div className="card">
      <div className="header">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="info">
        <div>
          <h2 className="topic">Filmes</h2>
          <p className="answer">{film}</p>
        </div>
        <div>
          <h2 className="topic">Espécie</h2>
          <p className="answer">{species}</p>
        </div>
        <div>
          <h2 className="topic">Altura</h2>
          <p className="answer">{height}</p>
        </div>
        <div>
          <h2 className="topic">Localidade</h2>
          <p className="answer">{local}</p>
        </div>
        <div>
          <h2 className="topic">Armas</h2>
          <p className="answer">{weapon}</p>
        </div>
      </div>
    </div>
  </>
);
