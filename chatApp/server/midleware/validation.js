    export const validation = (schema, message) => (req, res, next) => {
      const { error } = schema.validate(req.body);

      if (error) {
        error.status = 400;
        error.message = message;
        return next(error);
      }

      next();
    };
