import React, { useRef } from "react";
import { toast } from "react-toastify";
import { Entrega } from "../../api";
import MapContainer from "../../components/Map";
import DefaultTable from "../../components/table";
import { entregaColumn, entregaOptions } from "./tableConfig";

export default function MapaPage() { 
  
  const tableRef = useRef();

  const carregaEntregas = (query) =>
    new Promise((resolve, reject) => {
      Entrega.get("/entregas", null)
        .then((result) => {
          if (result.data) {
            resolve({
              data: result.data,
              page: result.data[`page`] - 1,
              totalCount: result.data[`total_of_items`],
            });
          } else {
            resolve({
              data: [],
              page: result.data[`page`] - 1,
              totalCount: result.data[`total_of_items`],
            });
          }
        })
        .catch(() => {
          resolve({
            data: [],
            page: 0,
            totalCount: 0,
          });
          reject(console.log("Nenhum resultado encontrado"));
        });
      });
      return (
        <>
        <DefaultTable
          columns={entregaColumn}
          options={entregaOptions}
          data={carregaEntregas}
          tableRef={tableRef}
          detailPanel={(rowData) => {
            return <MapContainer data={rowData}/>;
          }}

          editable={{

            onRowAdd: rowData =>
            new Promise((resolve, reject) => {
              
              const ano = new Date(rowData.dta_entrega).getFullYear();
              const mes = new Date(rowData.dta_entrega).getMonth()+1;
              const dia = new Date(rowData.dta_entrega).getDate();
              
              rowData.dta_entrega = `${ano}-${mes}-${dia}`;

                setTimeout(() => {
                  Entrega.post(`/entregas/`, rowData).then(() => {
                    setTimeout(() => {
                      toast.success('Cadastrado com sucesso!');
                      tableRef.current.onQueryChange();
                    }, 100)
                  }).catch(result => {
                    console.log(result.response.data);
                    setTimeout(() => {
                      toast.error('Erro ao cadastrar!');
                      tableRef.current.onQueryChange();
                    }, 100)                  
                  });
                    resolve();
                }, 1000);
            }),

            onRowDelete: (rowData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                Entrega.delete(`/entregas/${rowData.id}`).then(() => {
                  setTimeout(() => {
                    toast.success('Removido com sucesso!');
                    tableRef.current.onQueryChange();
                  }, 100)
                }).catch(result => {
                  console.log(result.response.data);
                  setTimeout(() => {
                    toast.error('Erro ao remover.');
                    tableRef.current.onQueryChange();
                  }, 100)                  
                });
                resolve();
              }, 1000);
            }),
          }}
        /> 
    </>
  );
}
