var role = "subadmin";

switch (role) {
  case "admin":
    console.log("get full access");
    break;
  case "subadmin":
    console.log("get access to create/delete courses");
    break;
  case "testprep":
    console.log("get access to create/delete test");
    break;
  case "user":
    console.log("get access to consume content");
    break;
  default:
    console.log("enter role properly");
    break;
}
