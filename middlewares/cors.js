function cors(req, res, next) {
    const { origin } = req.headers;

    const allowedCors = [
        "https://practicum.yandex.ru",
        "https://students-projects.ru",
        "http://localhost:3000",
        "http://localhost:3001",
        "https://pindie.nomoredomainswork.ru",
    ];

    if (allowedCors.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    );
    next();
}

module.exports = cors;
