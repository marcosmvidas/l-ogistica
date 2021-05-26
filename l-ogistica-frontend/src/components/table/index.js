import React from "react";
import MaterialTable from "material-table";
import { Container } from "./styles";

export default function DefaultTable({
  title,
  columns,
  data,
  options,
  localization,
  actions,
  detailPanel,
  editable,
  cellEditable,
  components,
  tableRef,
}) {
  return (
    <Container>
      <MaterialTable
        title={title}
        columns={columns}
        options={options}
        data={data}
        localization={localization}
        actions={actions}
        detailPanel={detailPanel}
        editable={editable}
        cellEditable={cellEditable}
        components={components}
        tableRef={tableRef}
      />
    </Container>
  );
}

DefaultTable.defaultProps = {
  title: "",
  columns: [],
  options: {
    emptyRowsWhenPaging: false,
    search: false,
    sorting: true,
    exportButton: false,
    addRowPosition: "first",
    selection: false,
    headerStyle: {
      backgroundColor: "#01579b",
    },
    pageSizeOptions: [10, 25, 50],
    pageSize: 10,
    debounceInterval: 500,
  },
  localization: {
    grouping: {
      placeholder: "Arraste os cabeçalhos aqui para organizar por grupos",
      groupedBy: "Agrupado por:",
    },
    pagination: {
      labelDisplayedRows: `{from} - {to} de {count}`,
      labelRowsSelect: "Linhas",
      firstAriaLabel: "Primeira página",
      firstTooltip: "Primeira página",
      nextAriaLabel: "Próxima página",
      nextTooltip: "Próxima página",
      previousAriaLabel: "Página anterior",
      previousTooltip: "Página anterior",
      lastAriaLabel: "Ultima página",
      lastTooltip: "Ultima página",
    },
    toolbar: {
      nRowsSelected: "{0} linhas selecionadas",
      exportName: "Exportar para CSV",
      exportTitle: "Exportar",
      searchPlaceholder: "Digite aqui",
      addRemoveColumns: "Adicionar ou Remover colunas",
    },
    header: {
      actions: " ",
    },
    body: {
      emptyDataSourceMessage: "Nenhum registro encontrado",
      filterRow: {
        filterTooltip: "Filter",
      },
      editRow: {
        deleteText: "Tem certeza disso?",
      },
      editTooltip: "Editar",
      deleteTooltip: "Excluir",
    },
  },
  actions: [],
  onSelectionChange: "",
};
