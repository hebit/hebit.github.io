import React, { useEffect, useState, ReactElement } from "react";
import axios from "axios";
import Markdown, { NodeType } from "react-markdown";
import { Text, Link } from "evergreen-ui";
import Divider from "../Divider";
import { StyleContainer } from "./style";

// import { Container } from './styles';
// NodeType.

// type Renderers = {
//     [key: NodeType]: string | ReactElement
// }

const renderes = {
  paragraph: Text,
  link: Link,
  //   : (() => <Divider />) as React.ComponentType,
} as Record<NodeType, string | React.ComponentType>;

function Bio() {
  const [content, setContent] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get<string>(
        "https://raw.githubusercontent.com/hebit/hebit/master/README.md"
      )
      .then((res) => {
        // console.log({ res });
        setContent(res.data);
      });
  }, []);
  return (
    <StyleContainer>{content && <Markdown source={content} />}</StyleContainer>
  );
}

export default Bio;
