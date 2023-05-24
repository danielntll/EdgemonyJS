const BASE_URL = "https://dummyjson.com/todos";


//  In questo caso cambiando il BASE_URL e facendolo combaciare con un REST che 
//  accetta la struttura dei TODO andrà tutto a buon fine.

export const writeDb = {
  add: async (body) => {
    const res = await fetch(BASE_URL + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data)
    return data;
  },
  update: async (idToUpdate, body) => {
    const res = await fetch(BASE_URL + "/" + idToUpdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data)
    return data;
  },
  delete: async (idToDelete) => {
    const res = await fetch(BASE_URL + "/" + idToDelete, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data)
    return data;
  },
}


export const readDb = {
  all: async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    return data;
  },
  specificId: async (idToRead) => {
    const res = await fetch(BASE_URL + "/" + idToRead);
    const data = await res.json();

    return data;
  },
  rendom: async () => {
    const res = await fetch(BASE_URL + "/random");
    const data = await res.json();

    return data;
  },
  allByUserId: async (userId) => {
    const res = await fetch(BASE_URL + "/user/" + userId);
    const data = await res.json();

    return data;
  }
}