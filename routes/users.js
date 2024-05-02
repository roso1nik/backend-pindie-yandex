const usersRouter = require("express").Router();

const {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,
} = require("../middlewares/users");
const {
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkEmptyNameAndEmailAndPassword,
    checkIsUserExists,
    createUser,
    sendUserCreated
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    checkEmptyNameAndEmail,
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
);
usersRouter.delete(
    "/users/:id", // Слушаем запросы по эндпоинту
    deleteUser,
    sendUserDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = usersRouter;
