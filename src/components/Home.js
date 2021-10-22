import React, { useState } from "react";
import Section from "./Section";
import Cars from "../carInfo";
import Header from "./Header";
import styled from "styled-components";

const Home = () => {
  const [carsList, setCarsList] = useState(Cars);
  const [isMobileOn, setIsMobileOn] = useState(false);

  const openMobileMenu = () => {
    setIsMobileOn(true);
  };

  const closeMenu = () => {
    setIsMobileOn(false);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <Header
            isMobileOn={isMobileOn}
            openMobileMenu={openMobileMenu}
            closeMenu={closeMenu}
          />
        </HeaderContainer>

        {carsList.map((car) => {
          const {
            id,
            title,
            description,
            image,
            delivery,
            order,
            inventory,
            downArrow,
          } = car;
          return (
            <Section
              key={id}
              title={title}
              description={description}
              image={image}
              delivery={delivery}
              order={order}
              inventory={inventory}
              downArrow={downArrow}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
