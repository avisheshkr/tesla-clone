import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  image,
  delivery,
  order,
  inventory,
  downArrow,
}) => {
  return (
    <>
      <SectionContainer
        style={{
          background: `url(${image}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <TextContainer>
          <h1>{title}</h1>
          {description && (
            <p>
              {description} {delivery && <span>{delivery}</span>}
            </p>
          )}
        </TextContainer>
        <Buttons>
          {downArrow ? (
            <>
              <ButtonGroup>
                <ButtonOrder>{order}</ButtonOrder>
                {inventory && <ButtonInventory>{inventory}</ButtonInventory>}
              </ButtonGroup>
              <DownArrow src="images/down-arrow.svg" />{" "}
            </>
          ) : (
            <ButtonGroup style={{ paddingBottom: "70px" }}>
              <ButtonOrder>{order}</ButtonOrder>
              {inventory && <ButtonInventory>{inventory}</ButtonInventory>}
            </ButtonGroup>
          )}
        </Buttons>
      </SectionContainer>
    </>
  );
};

export default Section;

const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 100px;
  h1 {
    font-size: 45px;
    font-weight: 500;
  }
  p {
    color: var(--secondary-color);
    font-size: 15px;
  }
  span {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    cursor: pointer;
    transition: color 0.1s ease-in-out;
  }

  span:hover {
    color: #111111;
    border-bottom: 2px solid #000;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonOrder = styled.div`
  height: 40px;
  width: 270px;
  background-color: rgba(10, 10, 10, 0.7);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.6px;
  cursor: pointer;
`;

const ButtonInventory = styled(ButtonOrder)`
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--primary-color);
`;

const DownArrow = styled.img`
  height: 45px;
  animation: animateDown 1.5s infinite;
`;
