import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard({character}) {
  return (
  <span>
      <Card>
        <CardImg top width="100%" src={character.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {character.name}</CardTitle>
          <CardSubtitle>Gender: {character.gender}</CardSubtitle>
          <CardText>Species: {character.species}</CardText>
        </CardBody>
      </Card>
    </span>
  )};
  
  
  
//   <span>
//     <h1>Name: {character.name}</h1>
//     <p>Gender: {character.gender}</p>
//     <p>Species: {character.species}</p>
//     <img src={character.image}/>
//   </span>;
// }
