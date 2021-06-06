import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';

const AccountModal = ({ show, handleClose, auth }) => {
  const history = useHistory();
  const [name, setName] = useState();

  const handleSubmit = () => {
    auth.login(name, '12345', history.push('/dashboard'));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Seu nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Seu E-mail</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label className="my-1 mr-2" htmlFor="formCitySelect">
              Cidade
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="formCitySelect"
              custom
            >
              <option value="0">São Paulo - SP</option>
              <option value="1">Rio de Janeiro - RJ</option>
              <option value="2">Curitiba - PR</option>
              <option value="3">Macéio - AL</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Eu li e concordo com os termos de uso."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Criar Conta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
