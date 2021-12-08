// Problema A

  cofla = "Cofla";
  roberto= "Roberto";
  pedro = "Pedro"

const purchase = (n) => {
  let money = prompt(`Dinero de ${n}`);

  if (money >= 0.6 && money <1 ) return (`${n} can buy an ice cream of water`);
  if (money >= 1 && money < 1.6) return (`${n} can buy an ice cream of milk`);
  if (money >= 1.6 && money < 1.7) return (`${n} can buy an ice cream of chocolate`);
  if (money >= 1.7 && money < 1.8) return (`${n} can buy an ice cream of vanilla`);
  if (money >= 1.8 && money < 2.9) return (`${n} can buy an ice cream of strawberry`);
  if (money >= 2.9) return (`${n} can buy a big ice cream or a nutella ice cream`);
  else return (`${n} cannot buy anything`);
} 

console.log(purchase("Aldo"))
//Problema B


//Problema C