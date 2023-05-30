
const BASE_URL = "https://dummyjson.com/";

export const homePageFeed = {
  foryou: {
    data: [],

    fetchNewData: async () => {
      let res = await fetch(BASE_URL + "posts");
      let data = await res.json();
      let aux = await adaptData(data.posts);
      homePageFeed.foryou.setData(aux);
      return aux;
    },
    getData: () => {
      return homePageFeed.foryou.data;
    },
    setData: (data) => {
      homePageFeed.foryou.data = data;
    },
    mergeData: (data) => {
      homePageFeed.foryou.data.concat(data);
    },
  },


  following: {
    data: [],
    fetchNewData: async () => {
      let res = await fetch(BASE_URL + "posts");
      let data = await res.json();
      let aux = await adaptData(data.posts.reverse());
      homePageFeed.following.setData(aux);
      return aux;

    },
    getData: () => {
      return homePageFeed.following.data;
    },
    setData: (data) => {
      homePageFeed.following.data = data;
    },
    mergeData: (data) => {
      homePageFeed.following.data.concat(data);
    },
  }
}



//------------
const adaptData = (rowData) => {
  rowData.forEach((element, index) => {
    element.user = {
      id: index + 1,
      name: "User " + index + Math.floor(Math.random() * (999 - 0) + 0),
      imgUrl: "https://robohash.org/" + index,
      isVerified: Math.random() < 0.5,
      description: element.title,
      following: Math.floor(Math.random() * (999 - 0) + 0),
      followers: Math.floor(Math.random() * (999 - 0) + 0),
    }
    element.data = new Date(new Date() - Math.random() * (1e+12));
    element.reply = Math.floor(Math.random() * (999 - 0) + 0);
    element.retweet = Math.floor(Math.random() * (999 - 0) + 0);
    element.like = Math.floor(Math.random() * (999 - 0) + 0);
    element.views = Math.floor(Math.random() * (999 - 0) + 0);
  });

  return rowData;
}

