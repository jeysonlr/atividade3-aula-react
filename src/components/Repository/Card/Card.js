import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({ repository, isSelected, onClick }) {
  return (
    <li onClick={onClick} className={`RepositoryCard ${isSelected && 'RepositoryCard--selected'}`} >
      <h3>{repository.name}</h3>
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repository.stargazerCount || 0}
        </span>
        <span>
          <GoRepoForked /> {repository.forkCount || 0}
        </span>
        {repository.language && <span>{repository.language}</span>}
      </div>
    </li>
  );
}
