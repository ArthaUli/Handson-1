interface Human {
  name: string;
  age: number;
  location: string;
  gender: string;
}

const objectHuman: Human = {
  name: "Artha Uli",
  age: 19,
  location: "UNAI",
  gender: "Famele",
};

function cetakHuman2(human: Human) {
  console.log(human.location);
}

cetakHuman2(objectHuman);
