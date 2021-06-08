import React from 'react';
import { Col, Button, Tabs, Tab, Form } from 'react-bootstrap';

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="mt-4">Pagamentos</h3>
      <Tabs className="mt-5 pt-lg-2" defaultActiveKey="boleto">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group controlId="formBarCode" className="my-5">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o código de barras"
              />
            </Form.Group>
            <Form.Group controlId="formPaymentType" className="mb-5">
              <Form.Label>Forma de Pagamento</Form.Label>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  id="debit"
                  label="Débito em Conta Corrente"
                  name="paymentType"
                />
                <Form.Check
                  type="radio"
                  id="credit"
                  className="ml-4"
                  label="Cartão de Crédito"
                  name="paymentType"
                />
              </div>
            </Form.Group>
            <Button variant="success">Continuar</Button>
          </Form>
        </Tab>
        <Tab eventKey="transfer" title="Transferência">
          <Form>
            <Form.Row>
              <Form.Group
                as={Col}
                md="4"
                controlId="formTranferCode"
                className="mt-lg-5"
              >
                <Form.Group controlId="formBank">
                  <Form.Label className="mr-2" htmlFor="formBankSelect">
                    Banco
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="formBankSelect"
                    custom
                  >
                    <option value="0">Bradesco</option>
                    <option value="1">Santander</option>
                    <option value="2">Itaú</option>
                    <option value="3">Banco Real</option>
                  </Form.Control>
                </Form.Group>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="formAgencyCode"
                className="mt-lg-5"
              >
                <Form.Label>Agência</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="formAccountCode"
                className="mt-lg-5"
              >
                <Form.Label>Conta Corrente</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="formValueCode"
                className="mt-lg-1 mb-lg-5"
              >
                <Form.Label>Valor de Transferência</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="formExtractCode"
                className="mt-lg-1"
              >
                <Form.Label>Identificação nos extratos</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Button variant="success">Continuar</Button>
          </Form>
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
