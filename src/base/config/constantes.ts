export const ACCESS_TOKEN_KEY = 'access_token';
export const USER_LOGGED_KEY = 'user_logged';

export const SCRIPT_NAMES = [
  { id: 1, text: 'LA_CLIENTEJURIDICO' },
  { id: 2, text: 'LA_CLIENTENATURAL' },
  { id: 3, text: 'LA_CLIENTES' },
  { id: 4, text: 'LA_CUENTA' },
  { id: 5, text: 'LA_CUENTA_MOVIMIENTO' },
  { id: 6, text: 'LA_EMPLEADO' },
  { id: 7, text: 'LA_INVERSION' },
  { id: 8, text: 'LA_INVERSION_MOVIMIENTO' },
  { id: 9, text: 'LA_PRESTAMO' },
  { id: 10, text: 'LA_PRESTAMO_MOVIMIENTO' },
  { id: 11, text: 'LA_VINCULADOS' },
];

export const MENU_OPTIONS = [
  {
    name: 'ahorros',
    icon: '',
    active: false,
    submenu: [
      { name: 'consultas', route: '/ahorros/consultas' },
      { name: 'reportes', route: '/ahorros/reportes' },
    ],
  },
  {
    name: 'clientes',
    icon: '',
    active: false,
    submenu: [
      { name: 'consultas', route: '/clientes/consultas' },
      { name: 'reportes', route: '/clientes/reportes' },
    ],
  },
  {
    name: 'riesgos',
    icon: 'bx bx-grid-alt',
    active: true,
    submenu: [
      { name: 'procesos', route: '/riesgos/procesos' },
      { name: 'reportes', route: '/riesgos/reportes' },
    ],
  },
  {
    name: 'créditos',
    icon: 'bx bxs-bank',
    active: true,
    submenu: [
      { name: 'procesos', route: '/creditos/procesos' },
      { name: 'reportes', route: '/creditos/reportes' },
    ],
  },
  {
    name: 'plazo fijo',
    icon: '',
    active: false,
    submenu: [
      { name: 'consultas', route: '/plazo-fijo/consultas' },
      { name: 'reportes', route: '/plazo-fijo/reportes' },
    ],
  },
  {
    name: 'tesoreria',
    icon: '',
    active: false,
    submenu: [
      { name: 'consultas', route: '/tesoreria/consultas' },
      { name: 'reportes', route: '/tesoreria/reportes' },
    ],
  },
  // {
  //   name: 'salir',
  //   icon: 'bx bxs-log-out',
  //   active: true,
  //   submenu: [
  //     // { name: 'Salir', route: '/login' },
  //   ],
  // },
];


export const listaAgencias : any[] =[
  {codigo: 2,agencia: "Salcedo"},
  {codigo:3,agencia: "Ambato"},
  {codigo: 4,agencia: "Izamba"},
  {codigo: 5,agencia: "Riobamba"},
  {codigo: 6,agencia: "Machala"},
  {codigo: 7,agencia: "Guayaquil"},
  {codigo: 8,agencia: "Quito"},
  {codigo: 9,agencia: "Pasaje"},
  {codigo: 10,agencia: "Piñas"},
  {codigo: 11,agencia: "Mayorista"},
]
export const listaAsesoresAgencia :any[]=[
  {usuario:"ULLOAMARLON", nombre:"MARLON", codigoAgencia:4 },
  {usuario:"CAGUANAMARIA", nombre:"MARIA CAGUANA", codigoAgencia:4  },
  {usuario:"CHANGOCLAUDIO", nombre:"CLAUDIO CHANGO", codigoAgencia:3  },
  {usuario:"CHANGOALEJANDRO", nombre:"ALEJANDO CHANGO", codigoAgencia:3  },
  {usuario:"TALAHUADANIEL", nombre:"DANIEL TALAGUA", codigoAgencia:3  }
]
// id: String | number;
//     text: String | number;
//     tooltip?: String | undefined;
//     isDisabled?: boolean;

// export const  SCRIPT_NAMES = [
//   { id: 1, text: 'spUsuarioRol' },
//   { id: 3, text: 'spStudents' },
//     { id: 2, text: 'spRol' },

//   ];
