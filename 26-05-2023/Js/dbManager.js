const BASE_URL = "https://dummyjson.com/todos";

//  In questo caso cambiando il BASE_URL e facendolo combaciare con un REST che
//  accetta la struttura dei TODO andrà tutto a buon fine.

export const writeDb = {
  add: async (body) => {
    return await fetch(BASE_URL + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            console.log("writeDb.add() - Eseguito con successo : ", data);
            return true;
          } else {
            throw new Error("writeDb.add() - Upload fallito");
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      })
      .then((data) => {
        return data;
      });
  },
  update: async (idToUpdate, body) => {
    return await fetch(BASE_URL + "/" + idToUpdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            console.log("writeDb.update() - Eseguito con successo : ", data);
            return true;
          } else {
            throw new Error("writeDb.update() - Upload fallito");
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      })
      .then((data) => {
        return data;
      });
  },
  delete: async (idToDelete) => {
    return await fetch(BASE_URL + "/" + idToDelete, {
      method: "DELETE",
    })
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            return true;
          } else {
            throw new Error(
              "writeDb.delete() - Upload fallito. NOTA: può dare errore perchè l'id del todo non coincice con quelli presenti sul db"
            );
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      })
      .then((data) => {
        return data;
      });
  },
};

export const readDb = {
  all: async () => {
    return await fetch(BASE_URL)
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            throw new Error("readDb.all() - Richiesta fallita");
          }
        } catch (error) {
          console.error(error);
          return [];
        }
      })
      .then((data) => {
        return data;
      });
  },
  specificId: async (idToRead) => {
    return await fetch(BASE_URL + "/" + idToRead)
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            throw new Error("readDb.specificId() - Richiesta fallita");
          }
        } catch (error) {
          console.error(error);
          return [];
        }
      })
      .then((data) => {
        return data;
      });
  },
  random: async () => {
    return await fetch(BASE_URL + "/random")
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            throw new Error("readDb.random() - Richiesta fallita");
          }
        } catch (error) {
          console.error(error);
          return [];
        }
      })
      .then((data) => {
        return data;
      });
  },
  allByUserId: async (userId) => {
    return await fetch(BASE_URL + "/user/" + userId)
      .then(async (res) => {
        try {
          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            throw new Error("readDb.allByUserId() - Richiesta fallita");
          }
        } catch (error) {
          console.error(error);
          return [];
        }
      })
      .then((data) => {
        return data;
      });
  },
};
