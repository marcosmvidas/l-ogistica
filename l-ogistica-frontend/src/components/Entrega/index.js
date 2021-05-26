import React, { useState, useEffect } from "react";
import { Entrega } from "../../api";
import { Form, Button } from "react-bootstrap";

export default function ListaEntrega() {
  const [markLocation, setMarkLocation] = useState();

  async function carregarEntrega() {
    const response = await Entrega.get("/");
    setMarkLocation(response.data);
  }

  useEffect(() => {
    carregarEntrega();
  }, []);

  return (
    <>
      <Form>
        <div>
          <div className="content col-12">
            <h1>Lista de entrega </h1>
            <table className="table">
              <thead>
                <tr>
                  <th> Cliente</th>
                  <th> Endereço de entrega</th>
                  <th> Endereço de origem</th>
                  <th> Data da entrega</th>
                  <th> #</th>
                </tr>
              </thead>
              <tbody>
                {!!markLocation
                  ? markLocation.map((itens) => (
                      <tr key={itens.id}>
                        <td>{itens.cliente}</td>
                        <td>
                          {itens.end_destino} (lat: {itens.lat_destino} / lng:{" "}
                          {itens.lng_destino})
                        </td>
                        <td>
                          {itens.end_origem} - {itens.lat_origem} -{" "}
                          {itens.lng_origem}
                        </td>
                        <td>{itens.dta_entrega} </td>
                        <td>
                          <Button>Mapa</Button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </Form>
    </>
  );
}
