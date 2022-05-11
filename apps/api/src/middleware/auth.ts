import jwt from "jsonwebtoken";
export default function verifyToken(req, res, next) {
  const authorization = req?.headers?.authorization;
  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      return next({ ...err, status: 401 });
    } else {
      req.userData = decoded?.data;
      console.log("#################### req.user ######################");
      console.log(req.userData);
      console.log("#################### req.user ######################");
      return next();
    }
  });
}
