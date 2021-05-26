export const entregaColumn = [
  {
    title: "Cliente",
    field: "cliente",
    emptyValue: "não informado",
  },
  {
    title: "Endereço origem",
    field: "end_origem",
    emptyValue: "não informado",
  },
  {
    title: "Latitude",
    field: "lat_origem",
    emptyValue: "não informado",
  },
  {
    title: "Longitude",
    field: "lng_origem",
    emptyValue: "não informado",
  },
  {
    title: "Endereço destino",
    field: "end_destino",
    emptyValue: "não informado",
  },
  {
    title: "Latitude",
    field: "lat_destino",
    emptyValue: "não informado",
  },
  {
    title: "Longitude",
    field: "lng_destino",
    emptyValue: "não informado",
  },
  {
    title: "Data da entrega",
    field: "dta_entrega",
    type: "date",
    dateSetting: { format: 'dd-MM-yyyy'},

    emptyValue: "não informado",
  },
];


export const entregaOptions = {
  search: false,
  selection: false,
  exportButton: false,
  pageSizeOptions: [10, 25, 50],
  pageSize: 10,
  actionsColumnIndex: -1,
  emptyRowsWhenPaging: false,
  debounceInterval: 500,
  addRowPosition: 'first',
};
