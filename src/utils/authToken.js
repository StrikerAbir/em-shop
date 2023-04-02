export const setAuthToken = (user) => {
  const currentUser = {
    mobile: user.mobile,
  };
  //console.log(currentUser);
  //get jwt token with post method
  fetch("https://em-shop-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
    });
};
