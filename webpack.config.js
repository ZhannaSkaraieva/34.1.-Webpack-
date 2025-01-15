const path = require('path'); // Подключение модуля path для работы с путями в файловой системе
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { assert } = require('console');
const { Generator } = require('webpack');


// __dirname — это глобальная переменная в Node.js, 
// которая содержит абсолютный путь к директории, в которой находится текущий исполняемый файл


module.exports = (env) => { // с помошью переменной окружения создаем функцию и передаем конфигурацию для сборки 'development' or 'production'
    return {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src') + '/js/index.js',  // Указывает главный файл входа (entry point) для сборки JavaScript кода, 
        //hello: path.resolve(__dirname, 'src') + '/js/index.js' - если несколько точек входа присваиваем ему ключ
        output: {
            filename: '[name].[contenthash].js', // Имя итогового скомпилированного файла JavaScript 
            // [name] будет 'main' по умолчанию из entry,
            // [contenthash] берется хэш от содержимого файла и добавляется в название. // Имя итогового скомпилированного файла JavaScript
            path: path.resolve(__dirname, 'dist'), // Абсолютный путь к директории, в которую будут выводиться скомпилированные файлы
          clean: true, // Очищает папку output перед каждой сборкой, удаляя старые файлы
            assetModuleFilename: 'assets/[hash][ext]',
        },
        module: {
            rules: [
              {
                test: /\.js$/, // Применяет правило к файлам с расширением .js
                exclude: /node_modules/, // Исключает папку node_modules, чтобы не обрабатывать её содержимое
                use: {
                    loader: 'babel-loader', // Использует Babel для транспиляции JavaScript кода
                    options: {
                    presets: ['@babel/preset-env'], // Применяет пресет для поддержки современного синтаксиса JavaScript в старых браузерах
                  },
                },
              },
              {
                test: /\.scss$/, // Применяет правило к файлам с расширением .scss (Sass/SCSS файлы)
                use: ['style-loader', 'css-loader', 'sass-loader'], // Использует цепочку загрузчиков для обработки SCSS в CSS и внедрения в HTML
                },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.woff2$/i,
              type: 'asset/resource',
              generator: {
                filename:'/fonts/[name].ext'
              }
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },       
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public','index.html') })
        ],
    }
}