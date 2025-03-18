function addTwo(num: number): number {
  return num + 5;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toLocaleUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};


signUpUser("mubarak", "mubarak@gmail.com", false);
getUpper("mubarak");
let Myvalue = addTwo(10);
loginUser("m", "m@m.com");



const getHello = (s: string): string => {
  return "";
};

const heros = ['thor', 'spiderman', 'ironman']

heros.map((hero ): string => {
    return `hero is ${hero}` 

})


export {};
