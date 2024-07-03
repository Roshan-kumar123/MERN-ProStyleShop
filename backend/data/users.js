import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("test@123", 10),
    isAdmin: true,
  },
  {
    name: "Roshan Kumar",
    email: "roshan@email.com",
    password: bcrypt.hashSync("test@123", 10),
    isAdmin: false,
  },
  {
    name: "Sourabh Chaprana",
    email: "sourabh@email.com",
    password: bcrypt.hashSync("test@123", 10),
    isAdmin: false,
  },
];

export default users;
