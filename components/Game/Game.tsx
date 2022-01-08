import { FunctionComponent, useState } from "react";
import Figure from "./components/Figure";
import { Container, Ground } from "./Game.styled";
import Tree from "./assets/tree.svg";
import Cloud from "./assets/cloud.svg";
import Hill from "./assets/hill.svg";
import { getRandomNumberBetween } from "../../helpers/MathHelper";
import SceneObject, { SceneObjectListContainer } from "./components/SceneObject";

interface GameProps {}

let windowWidth = 1000
if(typeof window != "undefined") {
    windowWidth = window.innerWidth;
}

const randomTrees = Array.from({ length: 5 }, () =>
  getRandomNumberBetween(1, 10)
).map((rnd) => (
  <SceneObject key={rnd + '_cloud'} x={getRandomNumberBetween(1, windowWidth)}>
    {" "}
    <Tree height={rnd * 10} />
  </SceneObject>
));


const randomClouds = Array.from({ length: 5 }, () =>
  getRandomNumberBetween(10, windowWidth)
).map((x) => (
  <SceneObject key={x + '_cloud'} x={x} y={10}>
    <Cloud height={x % 100} />
  </SceneObject>
));

const randomHills = Array.from({ length: 5 }, () =>
  getRandomNumberBetween(1, 10)
).map((x) => (
  <SceneObject key={x + '_hill'} y={0} x={x * 50}>
    <Hill key={x} height={x * 2} />
  </SceneObject>
));

const Game: FunctionComponent<GameProps> = () => {
  const [x, setX] = useState(10);
  const [y, setY] = useState(0);

  return (
    <Container>
      <SceneObjectListContainer bottom={10} className="clouds-slide">
        {randomClouds}
      </SceneObjectListContainer>

      {/* <SceneObjectListContainer className="hills_and_trees">
        {randomHills}
        {randomTrees}
      </SceneObjectListContainer> */}

      {/* <Figure x={x} y={y} /> */}

      <Ground />
    </Container>
  );
};

export default Game;
