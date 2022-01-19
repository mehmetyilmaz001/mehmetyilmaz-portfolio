import { FunctionComponent, useEffect, useState } from "react";
import { Character, Container, Ground } from "./Game.styled";
import useKeypress from "../../hooks/useKeyPress";

interface GameProps {}

// let windowWidth = 1000
// if(typeof window != "undefined") {
//     windowWidth = window.innerWidth;
// }

// const randomTrees = Array.from({ length: 5 }, () =>
//   getRandomNumberBetween(1, 10)
// ).map((rnd) => (
//   <SceneObject key={rnd + '_tree'} x={getRandomNumberBetween(1, windowWidth)}>
//     {" "}
//     <Tree height={rnd * 10} />
//   </SceneObject>
// ));


// const randomClouds = Array.from({ length: 5 }, () =>
//   getRandomNumberBetween(10, windowWidth)
// ).map((x) => (
//   <SceneObject key={x + '_cloud'} x={getRandomNumberBetween(1, windowWidth)} y={10}>
//     <Cloud height={x % 100} />
//   </SceneObject>
// ));

// const randomHills = Array.from({ length: 5 }, () =>
//   getRandomNumberBetween(1, 10)
// ).map((x) => (
//   <SceneObject key={x + '_hill'} y={0} x={getRandomNumberBetween(1, windowWidth)}>
//     <Hill key={x} height={x * 2} />
//   </SceneObject>
// ));

const charDefaultY = 130 - 90; // container height - character height

const Game: FunctionComponent<GameProps> = () => {

  const [charX, setCharX] = useState<number>(100);
  const [charY, setCharY] = useState<number>(-2000);
  const [jump, setJump] = useState(true);
  // const [ randomBox, setRandomBox ] = useState<string>(boxes[getRandomNumberBetween(0, boxes.length - 1)]);

  useEffect(() => {
    setInterval(() => {
      setCharY(charDefaultY);
      setJump(false);
    }, 1500);
  }, [])

  const _jump = () => {
    setJump(true);
    setTimeout(() => {
      setJump(false);
    }, 200);
  }

  useKeypress(" ", () => {
    _jump();
  });
  
  useKeypress("ArrowLeft", () => {
    setCharX(charX - 10);
  });
  useKeypress("ArrowRight", () => {
    setCharX(charX + 10);
  });

  // useInterval(() => {
  //   setRandomBox(boxes[getRandomNumberBetween(0, boxes.length - 1)]);
  // }, 5000);

  return (
    <Container>
      
      <Character jump={jump} x={charX} y={charY} />

      {/* <BoxContainer>
        <Box size={10} x={200}>
          {randomBox}
        </Box>
        <Box size={10} x={10}>
          {randomBox}
        </Box>
      </BoxContainer> */}
      <Ground />
    </Container>
  );
};

export default Game;
