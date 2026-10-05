let bebida = 17
bebida>=18 ? "você pode beber" : "você não pode beber"

let pais = "Brasil"
switch( pais){
  case "França":
  case "Espanha":
  case "Alemanha":
  case "Inglaterra":
  console.log("Você mora na Europa")
    break
  case "Brasil":
  case "Argentina":
  case "Uruguai": 
  case "Colômbia":
    console.log("Você mora na América do Sul")
    break
  case "Estados Unidos":
  case "Canadá":
  case "México":
  case "Costa Rica":
    console.log("Você mora na América do Norte")
    break
  default:
  console.log("País não cadastrado ou continente desconhecido")
}