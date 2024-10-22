import jwt from "jsonwebtoken";
import pkg from "jsonwebtoken";

const { Unauthorized } = pkg;

const { SECRET_KEY } = process.env;

const isJWTERROR = (err) =>
  ["JsonWebTokenError", "TokenExpiredError"].includes(err.name);

export const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) {
    next(new Unauthorized("Not authorized"));
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const { id: userId } = decoded;

    const user = await Auth.findById(userId);

    if (!user || !user.token) {
      next(new Unauthorized("Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    if (isJWTERROR(error)) {
      next(new Unauthorized("Not authorized"));
    }
    next(error);
  }
};
