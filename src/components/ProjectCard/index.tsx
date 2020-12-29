import { ShadowBox } from "@src/styles/pages/Home";
import { Link, Pane } from "evergreen-ui";
import React from "react";
import EmpytProjectSlot from "./EmpytSlot";
import { Container } from "./styles";

type ProjectInfo = {
  name: string;
  desciption: string;
  previewImg: string;
  empty?: false;
  color: "light" | "dark";
  uri?: string;
};

type Props =
  | ProjectInfo
  | ({ empty: true } & Partial<Omit<ProjectInfo, "empty">>);

function ProjectCard({ empty, previewImg, name, color, uri }: Props) {
  if (empty) return <EmpytProjectSlot />;
  return (
    <Container
      hasPreviewLink={!!uri}
      name={name}
      bgImg={previewImg}
      bgColor={color ?? "light"}
      as="a"
    >
      <Pane className="bottom-bar">
        {uri && (
          <Link href={uri} target="_blank">
            Preview
          </Link>
        )}
      </Pane>
    </Container>
  );
}

export default ProjectCard;
