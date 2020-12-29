import React, { useState } from "react";
import Head from "next/head";

import {
  Container,
  ContentContainer,
  MainPaneContainer,
} from "../styles/pages/Home";
import Divider from "@src/components/Divider";
import { Pane, Image, ListItem, UnorderedList } from "evergreen-ui";
import { unit } from "@src/utils/styleHelpers";
import ProfilePicture from "@src/components/ProfilePicture";
import Title from "@src/components/Title";
import Bio from "@src/components/Bio";
import Paragraph from "@src/components/Paragraph";
import Bubbles from "@src/components/Bubbles";
import ProjectCard from "@src/components/ProjectCard";

export const AnimationContext = React.createContext({
  isHoverProfileImg: false,
  setIsHoverProfileImg: (value: boolean) => {},
});

const Home: React.FC = () => {
  const [isHoverProfileImg, setIsHoverProfileImg] = useState(false);
  return (
    <AnimationContext.Provider
      value={{ isHoverProfileImg, setIsHoverProfileImg }}
    >
      <Head>
        <title>Homepage</title>
      </Head>
      <Container>
        <ContentContainer>
          <MainPaneContainer>
            <Pane
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-end"
              minWidth={unit(50)}
            >
              <ProfilePicture />
            </Pane>
            <Pane paddingX={unit(4)} paddingLeft={unit(12)} flexGrow={1.65}>
              <Title>Hebert Oliveira (A.K.A. Hebit)</Title>
              <Bio />
            </Pane>
          </MainPaneContainer>
          <Divider />
          <Pane paddingX={unit(12)}>
            <Title marginTop={unit(12)}>Projects</Title>
            <Pane minHeight={unit(28)}>
              <Paragraph marginY={unit(4)}>
                Click in any card above to see details about the project.
              </Paragraph>
            </Pane>
          </Pane>
          <Pane
            overflow="hidden"
            maxWidth={`calc(100vw - ${unit(5)})`}
            position="relative"
          >
            <Pane
              marginY={unit(8)}
              paddingLeft={unit(12)}
              display="flex"
              overflow="visible"
              overflowX="hidden"
              width="100%"
            >
              <ProjectCard
                name="The Text Club"
                desciption=""
                color="light"
                previewImg="https://gitlab.com/hebit/the-text-club/uploads/cad990ec54a29a19ff756c83e8bbb7ad/image.png"
                uri="https://hebit.gitlab.io/the-text-club/"
              />
              <ProjectCard empty={true} />
              <ProjectCard empty={true} />
              <ProjectCard empty={true} />
              <ProjectCard empty={true} />
              <ProjectCard empty={true} />
            </Pane>
          </Pane>
          <Divider />

          {/* <Divider /> */}
          <Pane paddingX={unit(12)}>
            <Title marginTop={unit(12)}>Activities</Title>
            <Pane marginY={unit(12)}>
              <UnorderedList display="flex">
                <Pane width="50%" paddingRight={unit(4)}>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>InfoJr UFBA</Title>
                    <Paragraph>2019 - 2020</Paragraph>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vitae sunt ducimus porro quisquam exercitationem tempore,
                      suscipit distinctio, cum, quas dignissimos inventore
                      aperiam nobis odio. Odit in voluptas necessitatibus esse
                      repudiandae.
                    </Paragraph>
                  </ListItem>
                </Pane>
                <Pane width="50%" paddingLeft={unit(4)}>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>Anything here</Title>
                    <Paragraph>2018 - 2022</Paragraph>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vitae.
                    </Paragraph>
                  </ListItem>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>Curso SENAI - Programador WEB</Title>
                    <Paragraph>2016 - 2017</Paragraph>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vitae sunt ducimus porro quisquam exercitationem tempore,
                      suscipit distinctio, cum, quas dignissimos inventore
                      aperiam nobis odio. Odit in voluptas necessitatibus esse
                      repudiandae.
                    </Paragraph>
                  </ListItem>
                </Pane>
              </UnorderedList>
            </Pane>
          </Pane>
        </ContentContainer>
      </Container>
      <Bubbles />
    </AnimationContext.Provider>
  );
};

export default Home;
