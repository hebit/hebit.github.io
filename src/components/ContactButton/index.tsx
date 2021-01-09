import { Icon } from "evergreen-ui";
import React from "react";

import { Container } from "./styles";

interface Props {
  phone: string;
}

function ContactButton({ phone }: Props) {
  return (
    <Container
      href={`https://api.whatsapp.com/send?phone=${phone}&text=Oi,%20encontrei%20este%20contato%20no%20seu%20portf%C3%B3lio!`}
    >
      Fale comigo
      <Icon name="airplane" icon="base"></Icon>
    </Container>
  );
}

export default ContactButton;
