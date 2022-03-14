import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  recipe
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={recipe.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{recipe.title}</h3>
            <p>
              Ingredients: "{recipe.ingredients.join(', ')}"
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={recipe.href}
            >
              Go to recipe!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
