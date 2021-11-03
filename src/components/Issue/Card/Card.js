import { BsLink } from 'react-icons/bs'
import "./Card.css";

export default function IssueCard({ issue }) {
    const link = "https://github.com" + issue.resourcePath;
    return (
        <li className="IssueCard" >
            <h3>{issue.title}</h3>
            <span className="IssueCard__headline"> {issue.body} </span>
            <div className="IssueCard__additional-info" >
                <span>
                    <a href={link} target="_blank" rel="noreferrer"> <BsLink />Link</a>
                </span>
            </div>
        </li>
    )
}