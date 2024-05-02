const mongoose = require("mongoose");
const userModel = require("./user");
const categoryModel = require("./category");

const gameSchema = new mongoose.Schema({
    title: {
        // Поле со строковым значением
        type: String,
        // Явно указываем, что поле обязательно при записи в базу нового документа
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    developer: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    // Добавляем поле для списка пользователей
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: userModel,
        },
    ],
    // Добавляем свойство категории с массивом объектов, в котором укажем
    // тип ObjectId и ref на существующую модель категорий
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: categoryModel,
        },
    ],
});

module.exports = mongoose.model("game", gameSchema);
