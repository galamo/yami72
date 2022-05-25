import jwt from "jsonwebtoken";
export function signToken(obj: {
  first_name: string;
  last_name: string;
  email_address: string;
  employee_id: number;
}) {
  const token = jwt.sign(
    {
      data: {
        ...obj,
        password: null,
        role: "viewer",
      },
    },
    process.env.SECRET || "mySecretForApplication1234567",
    { expiresIn: "10h" }
  );

  return token;
}
