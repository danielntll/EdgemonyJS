const todosId = "todosId";

export const localStorage = {
  add: (data) => {
    window.localStorage.setItem("todosId", JSON.stringify(data));
  },
  read: () => {
    let data = window.localStorage.getItem(todosId);
    console.log("localStorage - read : ", data);
    if (data !== null) {
      console.log("RETURN - JSON.parse(data):", JSON.parse(data));
      return JSON.parse(data);
    } else {
      console.log("RETURN []");
      return [];
    }
  },
};
