export const writeStorage = {
  user: (userAccess) => {
    let userObj = {
      userAccess,
      lastAccess: Date.now()
    }
    localStorage.setItem("userCredentials", JSON.stringify(userObj));
  },
}

export const readStorage = {
  user: () => {
    let userData = localStorage.getItem("userCredentials");
    if (userData !== undefined || userData !== null) {
      return (JSON.parse(userData));
    } else {
      return null;
    }
  },
}