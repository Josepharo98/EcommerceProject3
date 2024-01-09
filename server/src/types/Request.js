
// Declare the Express namespace
var Express;

// Extend the Request interface within the Express namespace
if (Express && Express.Request) {
  Express.Request.prototype.user = {
    _id: '',
    name: '',
    email: '',
    isAdmin: false,
    token: '',
  };
}
