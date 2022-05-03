fetch("http://localhost:8080/auth/get-all-users")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("http://127.0.0.1:8080/auth/add-user", { // you can use localhost
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "anto", age: 20 }), // pass user data
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
