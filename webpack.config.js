const path = require('path'); // Подключение модуля path для работы с путями в файловой системе

// __dirname — это глобальная переменная в Node.js, 
// которая содержит абсолютный путь к директории, в которой находится текущий исполняемый файл


module.exports = (env) => { // с помошью переменной окружения передаем конфигурацию для сборки 'development' or 'production'
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
      },
    }
};