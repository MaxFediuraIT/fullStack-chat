export const sendDataResponse = (res, statusCode, data) => {
    try {
        res.status(statusCode).json(data);
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err,
        });
    }
};  