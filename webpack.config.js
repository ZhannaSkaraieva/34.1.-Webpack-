const path = require('path'); // Подключение модуля path для работы с путями в файловой системе

// __dirname — это глобальная переменная в Node.js, 
// которая содержит абсолютный путь к директории, в которой находится текущий исполняемый файл


module.exports = {
    entry: path.resolve(__dirname, 'src') + '/js/index.js',  // Указывает главный файл входа (entry point) для сборки JavaScript кода, 
    //hello: path.resolve(__dirname, 'src') + '/js/index.js' - если несколько точек входа присваиваем ему ключ
    output: {
        filename: 'bundle.js', // Имя итогового скомпилированного файла JavaScript
        path: path.resolve(__dirname, 'dist'), // Абсолютный путь к директории, в которую будут выводиться скомпилированные файлы
        clean: true, // Очищает папку output перед каждой сборкой, удаляя старые файлы
      },
    
};