import React, { useContext } from "react";
import { Image, Text } from "evergreen-ui";
import { unit } from "@src/utils/styleHelpers";
import { Container, TintText } from "./style";
import { AnimationContext } from "@src/pages";

export default function ProfilePicture() {
  const { setIsHoverProfileImg } = useContext(AnimationContext);
  return (
    <Container>
      <Image
        src="https://avatars1.githubusercontent.com/u/47919195?s=460&u=43dd056f679189d6e557bb91ba516b5075afb425&v=4"
        width={unit(36)}
        height="auto"
        onMouseEnter={() => setIsHoverProfileImg(true)}
        onMouseLeave={() => setIsHoverProfileImg(false)}
      />
      <TintText color="default">ヘバート</TintText>
    </Container>
  );
}
