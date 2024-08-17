export interface Car {
  id: string;
  marca: string;
  modelo: string;
}

export interface CarUpdate {
  CarroActulizado: Car;
  Carros: Car[];
}
