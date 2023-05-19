import { writeStorage } from '../Logic/localstorage.js'

const usersList = [
  {
    id: 0,
    email: "daniel@info.it",
    password: "test123",
    name: "Daniel",
    surname: "Turcanu",
    birthDate: "18/01/1999",
  }
]


export const authProccess = {
  verifyUser: (email, password) => {
    return (!!usersList.find(
      (user) => {

        writeStorage.user(user);
        return (
          user.email === email &&
          user.password === password
        )

      }
    ))
  },
  registerUser: (email, password, otherData) => {
    writeStorage.user(email, password);
  }
}