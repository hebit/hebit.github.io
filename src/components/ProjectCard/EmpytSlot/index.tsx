import { Link, Pane } from "evergreen-ui";
import React from "react";
import Paragraph from "../../Paragraph";
import { Container } from "./styles";

type Props = {
  repoUrl?: string;
};

function EmpytProjectSlot({ repoUrl }: Props) {
  return (
    <Container>
      <Pane className="text-container">
        <Paragraph as="span">Coming Soon</Paragraph>
      </Pane>
      {repoUrl && (
        <Pane className="bottom-bar">
          <Link target="_blank" href={repoUrl}>
            <Paragraph as="span">Contribute</Paragraph>
          </Link>
        </Pane>
      )}
    </Container>
  );
}

export default EmpytProjectSlot;
