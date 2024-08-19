import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecipeCard(props) {
  return (
    <Card style={{ width: '18rem' }} className="recipe-card">
      <Card.Img variant="top" src={props.picture} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.route}>Ver Receta</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;