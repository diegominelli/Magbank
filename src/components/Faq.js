import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import IconText from './IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

const Faq = () => (
  <Container className="py-5">
    <Row className="d-flex align-items-center justify-items-center">
      <Col className="d-lg-none mb-5" xs={12}>
        <Row>
          <Col className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faCreditCard} size="2x" />
          </Col>
          <Col className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faWallet} size="2x" />
          </Col>
          <Col className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          </Col>
          <Col className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faUserTie} size="2x" />
          </Col>
        </Row>
      </Col>
      <Col className="d-none d-lg-block">
        <IconText
          icon={faCreditCard}
          size={3}
          className="mb-3"
          textClassName="lead"
        >
          Cartão de crédito e débito
        </IconText>
        <IconText
          icon={faWallet}
          size={3}
          className="mb-3"
          textClassName="lead"
        >
          Conta e abertura
        </IconText>
        <IconText
          icon={faShieldAlt}
          size={3}
          className="mb-3"
          textClassName="lead"
        >
          Token digital
        </IconText>
        <IconText icon={faUserTie} size={3} textClassName="lead">
          Produtos e serviços
        </IconText>
      </Col>
      <Col>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Lorem ipsum dolor sit amet
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Nulla porttitor eros ac ex tristique posuere
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Quisque fringilla tincidunt arcu
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Nam elementum lobortis purus a maximus tortor
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default Faq;
