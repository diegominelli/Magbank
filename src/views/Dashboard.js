import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import AccountBalance from '../components/AccountBalance';

import './Dashboard.scss';
import { useState } from 'react';

const Dashboard = ({ className = false }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: 'Minha Conta', path: '/dashboard', exact: true },
    { text: 'Pagamentos', path: '/dashboard/payments' },
    { text: 'Extrato', path: '/dashboard/history' },
  ];

  const data = {
    latestBalance: [
      { date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
      { date: '21/07', description: 'SUPERMERCADO 89758945', value: '275,00' },
      { date: '20/07', description: 'NETFLIX 246589', value: '30,00' },
      { date: '28/07', description: 'FARMÁCIA  324650', value: '350,00' },
      { date: '18/07', description: 'BAR  752161', value: '150,00' },
    ],
    futureBalance: [
      { date: '02/10', description: 'AÇOUGUE 789456', value: '90,00' },
      { date: '11/02', description: 'SUPERMERCADO 258369369', value: '455,00' },
      { date: '22/09', description: 'INTERNET  852102', value: '150,00' },
      { date: '08/11', description: 'CLARO  4568213', value: '250,00' },
    ],
  };

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className="align-items-center mb-5">
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
          {links.map(({ text, path, exact }, key) => (
            <Link
              className="dashboard-link"
              to={path}
              exact={exact ? exact : false}
              key={key}
            >
              <Button
                className={`dashboard-button text-left ${
                  key === activeLink ? 'dashboard-button-active' : ''
                }`}
                variant="link"
                size="lg"
                block
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>
        <Switch>
          <Route path="/dashboard/history">
            <h2>Extratos</h2>
          </Route>
          <Route path="/dashboard/payments">
            <h2>Pagamentos</h2>
          </Route>
          <Route path="/dashboard">
            <AccountBalance data={data} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default Dashboard;
