import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => (
  <Container className="dashboard py-5">
    <Row>
      <Col xs={12} lg={4}>
        <Row className="align-items-center">
          <Col xs={3}>
            <span className="dashboard-user-avatar">
              <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
              <FontAwesomeIcon
                className="dashboard-user-icon"
                icon={faUser}
                size="3x"
                color="#7c7d7d"
              />
            </span>
          </Col>
          <Col xs={9}>
            <h4>Diego Minelli</h4>
            <p className="text-muted">ag: 1352 c/c: 4321-8</p>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={3}></Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default Dashboard;
