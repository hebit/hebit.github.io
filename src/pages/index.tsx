import React, { useState } from "react";
import Head from "next/head";

import {
  Container,
  ContentContainer,
  MainPaneContainer,
} from "../styles/pages/Home";
import Divider from "@src/components/Divider";
import { Pane, Image, ListItem, UnorderedList, Button } from "evergreen-ui";
import { precision, unit } from "@src/utils/styleHelpers";
import ProfilePicture from "@src/components/ProfilePicture";
import Title from "@src/components/Title";
import Bio from "@src/components/Bio";
import Paragraph from "@src/components/Paragraph";
import Bubbles from "@src/components/Bubbles";
import ProjectCard from "@src/components/ProjectCard";
import ContactButton from "@src/components/ContactButton";

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
        <title>Hebit</title>
      </Head>
      <Container>
        <ContentContainer>
          <MainPaneContainer>
            <Pane
              display="flex"
              alignItems="flex-start"
              flexWrap="wrap"
              justifyContent="flex-end"
              minWidth={unit(50)}
              maxWidth={unit(80)}
              position="relative"
              marginBottom={unit(12)}
            >
              <ProfilePicture />
              <Pane
                marginRight={precision(2)}
                position="absolute"
                bottom={unit(-10)}
              >
                <ContactButton phone="557187995477" />
              </Pane>
            </Pane>
            <Pane paddingX={unit(4)} paddingLeft={unit(12)} flexGrow={1.65}>
              <Title>Hebert Oliveira (A.K.A. Hebit)</Title>
              <Bio />
            </Pane>
          </MainPaneContainer>
          <Divider />
          <Pane paddingX={unit(12)}>
            <Title marginTop={unit(12)}>Projetos</Title>
            <Pane minHeight={unit(28)}>
              <Paragraph marginY={unit(4)}>
                Alguns dos meus projetos. Clique em algum card e veja o preview.
              </Paragraph>
            </Pane>
          </Pane>
          <Pane
            overflow="hidden"
            maxWidth={`calc(100vw - ${unit(5)})`}
            position="relative"
          >
            <Pane
              marginTop={unit(8)}
              paddingLeft={unit(12)}
              display="flex"
              // overflow="visible"
              overflowX="auto"
              paddingBottom={unit(12)}
              width="100%"
            >
              <ProjectCard
                name="The Text Club"
                desciption=""
                color="light"
                previewImg="https://gitlab.com/hebit/the-text-club/uploads/cad990ec54a29a19ff756c83e8bbb7ad/image.png"
                uri="https://hebit.gitlab.io/the-text-club/"
              />
              <ProjectCard
                name="Spatial Card Style"
                desciption=""
                color="dark"
                previewImg="https://gitlab.com/hebit/spacinfo/uploads/b5e506d38a7d06ff68b19e2775fc1a9a/Screenshot_2021-01-09_React_App.png"
                uri="https://quizzical-heisenberg-a47472.netlify.app"
              />
              <ProjectCard
                name="Loading CSS animation"
                desciption=""
                color="light"
                previewImg="https://user-images.githubusercontent.com/47919195/104086289-5bb0f480-5235-11eb-911e-63352f3b1e39.png"
                uri="https://hebit.github.io/teste-for-gabinete-do-texto/"
              />
              <ProjectCard
                name="BMO Form"
                desciption=""
                color="light"
                previewImg="https://gitlab.com/hebit/spacinfo/uploads/1bc46c29648be240befdcecb411c4103/Screenshot_2021-01-09_PlugInfo.png"
                uri="http://pluginfo.infojr.com.br/"
              />
              <span></span>
              <ProjectCard empty={true} />
              <ProjectCard empty={true} />
            </Pane>
          </Pane>
          <Divider margin={unit(0)} />

          {/* <Divider /> */}
          <Pane paddingX={unit(12)}>
            <Title marginTop={unit(12)}>Atividades</Title>
            <Pane marginY={unit(12)}>
              <UnorderedList display="flex">
                <Pane width="50%" paddingRight={unit(4)}>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>InfoJr UFBA</Title>
                    <Paragraph>2019 - 2020</Paragraph>
                    <Paragraph>
                      Atuei como desenvolvedor com foco maior na área de
                      frontend, utilizando Laravel(Blade) e SASS para o
                      desenvolvimento de interfaces.
                    </Paragraph>
                    <Paragraph>
                      Me tornei Diretor de Projetos em 2020, estabelecendo
                      processos necessários para a diretoria como manutenção do
                      servidor e atividades de gerenciamento dos projetos, além
                      atuar como desenvolvedor usando como principal tecnologia
                      o React (por vezes através do Gastby ou NextJs) se
                      comunicando via API Rest ou Graphql com backend em
                      AdonisJs (NodeJs).
                    </Paragraph>
                  </ListItem>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>Graduação Ciência da Computação</Title>
                    <Paragraph>2018 - Atual</Paragraph>
                    <Paragraph>
                      Ingressei no curso de ciência da computação na
                      Universidade Federal da Bahia.
                    </Paragraph>
                  </ListItem>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>Curso CSS - Codecademy</Title>
                    <Paragraph>2018</Paragraph>
                    <Paragraph>
                      Realizei Curso oferecido pela codecademy que abordava Box
                      Model, Flexbox, Grid e animações simples com CSS.
                    </Paragraph>
                  </ListItem>
                </Pane>
                <Pane width="50%" paddingLeft={unit(4)}>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>Maratona Baiana de Programação</Title>
                    <Paragraph>2019</Paragraph>
                    <Paragraph>
                      Participei na Maratona Baiana de Programação como equipe
                      da UFBA resolvendo desafios de programação dinamica,
                      matemática e algoritmos de forma geral.
                    </Paragraph>
                  </ListItem>
                  <ListItem marginY={unit(8)}>
                    <Title size={600}>Curso SENAI - Programador WEB</Title>
                    <Paragraph>2016 - 2017</Paragraph>
                    <Paragraph>
                      Curso de programação web, onde foram apresentadas
                      conceitos básicos de HTML, CSS, JS, PHP e MySQL para
                      construção do projeto final idealizado em duplas. Fizemos
                      uso de PDO para manipular as informações do banco de dados
                      e esboçamos a interface no Marvel e Photshop.
                    </Paragraph>
                    <Paragraph>
                      Desenvolvemos um portal para ideias, dicas e uma área de
                      fórum em que os usuários poderiam produzir conteudo e
                      interagir através de likes. O projeto ainda contava com um
                      ranking de usuário com o intuito de gamificar a
                      participação dos usuários na plataforma.
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
