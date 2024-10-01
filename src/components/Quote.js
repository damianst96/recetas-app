import { Card } from "react-bootstrap";

function Quote(props){
    return (
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
                <b>{' '}{props.title}{' '}</b>
            </p>
            <footer className="blockquote-footer">
                {props.author} - <cite title="Source Title">{props.source}</cite>
            </footer>
            </blockquote>
            <br></br>
        </Card.Body>
    );
}

export default Quote;