function sample(a) {
  console.log(Math.pow(a, a));
}
sample(2);
sample(3);
sample(4);
sample(5);
sample(6);
sample(7);
sample(8);
sample(9);
sample(11);

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      console.log(`${name},get full access`);
      break;
    case "subadmin":
      console.log(`${name},get access to create/delete courses`);
      break;
    case "testprep":
      console.log(`${name},get access to create/delete test`);
      break;
    case "user":
      console.log(`${name},get access to consume content`);
      break;
    default:
      console.log(`${name},trial User`);
      break;
  }
}

getUserRole("charan", "admin");
getUserRole("charanmurugan", "subadmin");
