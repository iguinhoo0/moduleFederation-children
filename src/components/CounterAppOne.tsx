import React, { useState } from "react";
import { Container, Button } from "./styles";

interface ITeste {
  value?: number;
}

const Counter: React.FC<ITeste> = ({ value }) => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button onClick={() => setCount(count + 1)}>State do microFront</Button>
      <p>Count (state do MF): {count}</p>
      <p>Valor dsvdsvdsvsdvs do pai: {value}</p>
    </Container>
  );
};

export default Counter;
