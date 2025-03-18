// const User = {
//   name: "mubarak",
//   email: "mubarak@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "mubarak", isPaid: false, email: "mubarak@gmail.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "mubarak", price: 399 };
// }

// type allias
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: " ", isActive: true };
// }
// createUser({ name: "", email: " ", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};
type cardNumber = {
  cardnum: string;
};
type cardDate = {
  date: string;
};

type cardCvv = {
  Cvv: number;
};

type cardDetails = cardCvv & cardDate & cardNumber;

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "mubarak@gmail.com",
  isActive: false,
};
myUser.email = "mubarak1@gmail.com";

export {};
