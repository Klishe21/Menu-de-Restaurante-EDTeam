const user = {
    name: 'Pablo',
    age: 28,
    bill: 0,
};
let pick = [];
let ticket = 0;

const showMenu = () => {
  console.log('CODIGO - PRODUCTO - PRECIO');
  for (const item of product) {
    console.log(`${item.code} - ${item.name} - $${item.cost}`);
  }
};

const pickMenu = (cod) => {
  if (!cod) return 'Ingrese un código válido';
  const searchItem = product.find((item) => item.code === cod);
  if (!searchItem) return 'El producto no existe';
  pick.push(searchItem);
  console.log('Su pedido ha sido agregado: ');
  return pick;
};

const showPick = () => pick;

const calcTicket = () => {
  let costTicket = 0;
  for (item of pick) {
    costTicket += item.cost;
  }
  ticket = costTicket;
  return ticket;
};

const finalyTicket = () => {
  calcTicket();
  user.bill = ticket;
  pick = [];
  ticket = 0;
  return `${user.name}, debes pagar €${user.bill}`;
};
const payTicket = (money) => {
  switch (true) {
    case (money === user.bill):
      user.bill = 0;
      console.log('No tienes deuda, gracias por su pedido');
      break;
    case (money < user.bill):
      console.log(`Dinero insuficiente faltan €${user.bill - money}`);
      payTicket;
      break;
    case (money > user.bill):
      console.log(`Gracias por su compra, su cambio es €${money - user.bill}`);
      user.bill = 0;
      break;
    default:
      console.log('Por favor introduzca un monto válido');
  }
};
