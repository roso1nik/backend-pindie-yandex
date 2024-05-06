function cors(req, res, next) {
    const { origin } = req.headers;

    const allowedCors = [
        "https://practicum.yandex.ru",
        "https://students-projects.ru",
        "http://localhost:3000",
        "http://localhost:3001",
    ];

    if (allowedCors.includes(origin))
        res.header("Access-Control-Allow-Origin", origin);

    next();
}

module.exports = cors;
