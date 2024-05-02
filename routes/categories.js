const categoriesRouter = require("express").Router();

const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted,
} = require("../controllers/categories");
const {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName,
} = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
// categoriesRouter.post(
//     "/categories",
//     findAllCategories,
//     createCategory,
//     sendCategoryCreated,
//     sendCategoryDeleted
// );
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkEmptyName,
    checkIsCategoryExists,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    findCategoryById, // Шаг 1. Находим игру по id из запроса
    // Шаг 2. Проверки, если нужны
    updateCategory, // Шаг 3. Обновляем запись с игрой
    sendCategoryUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
);
categoriesRouter.delete(
    "/categories/:id", // Слушаем запросы по эндпоинту
    deleteCategory,
    sendCategoryDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = categoriesRouter;
