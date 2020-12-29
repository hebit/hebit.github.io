import React, { ComponentProps } from "react";
// import { Button as GrommetButton } from "grommet";

import { Container } from "./style";

type Props = React.ComponentProps<typeof Container>;

const Button = (props: Props) => {
  return <Container {...props} />;
};

export default Button;
