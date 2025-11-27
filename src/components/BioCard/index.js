import React, { useState } from "react";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Modal } from "antd";
import CloseIcon from "../CloseIcon";
import {
  Container,
  Headshot,
  Name,
  Position,
  ModalBody,
  Left,
  Right,
  Border,
} from "./styles";
const BioCard = ({ data, index }) => {
  console.log(data);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        footer={null}
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<CloseIcon />}
      >
        <ModalBody>
          <Left>
            <img src={data.elements.headshot.value[0].url} />
          </Left>
          <Right>
            <h1>{data.elements.full_name.value}</h1>
            <h2>{data.elements.position.value}</h2>
            <RichTextElement
              value={data.elements.biography.value}
            ></RichTextElement>
          </Right>
        </ModalBody>
      </Modal>

      <Container onClick={showModal} index={index}>
        <Border />
        <Headshot src={data.elements.headshot.value[0].url} />
        <Name>{data.elements.full_name.value}</Name>
        <Position>{data.elements.position.value}</Position>
      </Container>
    </>
  );
};

export default BioCard;
