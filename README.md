# 34.1.-Webpack-
1.
npm init -y
инициализация проэкта , для прнятия дефолтных настроек.
Создается файл package.json
1.1. создаем папку src/js в которой находиться фаил с исходным кодом приложения: index.js.

2 
2.1. устанавливаем webpack and webpack-cli: Webpack and its command-line interface.
npm install webpack webpack-cli --save-dev
2.2. создаем команду для запуска webpack в packge.json прописываем script : "build":"webpack"

3
3.1. Создаем в корне проэкта фаил webpack.config.js. Для всех настроек.

4.Настраиваем Entry Points.
5.Настраиваем output - указываем куда и как будет происходить сборка

sass-loader: Loader to compile Sass/SCSS files into CSS.
css-loader: Loader to handle CSS imports.
style-loader: Injects CSS into the DOM.
npm install sass sass-loader css-loader style-loader html-webpack-plugin @babel/preset-env babel-loader --save-dev


webpack:
Назначение: Модульный сборщик для JavaScript приложений.
Функция: Компилирует модули JavaScript и другие ресурсы (CSS, изображения) в один или несколько файлов, которые можно использовать в браузере.

webpack-cli:
Назначение: Интерфейс командной строки для Webpack.
Функция: Позволяет запускать и конфигурировать Webpack через командную строку.


sass-loader:

Назначение: Загрузчик для компиляции файлов Sass/SCSS в CSS.
Функция: Преобразует Sass/SCSS файлы в CSS, чтобы их можно было обработать другими загрузчиками и вставить в DOM.
css-loader:

Назначение: Загрузчик для обработки импортов CSS файлов.
Функция: Позволяет импортировать CSS файлы и включать их в JavaScript файлы.
style-loader:

Назначение: Загрузчик для инъекции CSS в DOM.
Функция: Вставляет CSS стили в DOM при помощи тега <style>.
html-webpack-plugin:

Назначение: Плагин для автоматического создания HTML файлов.
Функция: Генерирует HTML файл, который включает ссылки на бандлы, созданные Webpack.
@babel/preset-env:

Назначение: Пресет для Babel.
Функция: Позволяет использовать новейшие функции JavaScript, преобразуя код в совместимый с текущими браузерами.
babel-loader:

Назначение: Загрузчик для Babel.
Функция: Интегрирует Babel с Webpack для транспиляции JavaScript кода.
