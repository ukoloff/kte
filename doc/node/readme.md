# JavaScript-модули

Для обеспечения кросс-платформенности
реализации,
несколько программных модулей
были реализованы на языке
[JavaScript]
на платформе
[Node.js]:

- Web-утилита, содержащая модули
  + [Конвертации DXF-файла и ввода технологических параметров][input]
  + [Просмотра списка КТЭ][view]
- [Утилита генерации управляющих программ][ncp]

[input]: input.md
[view]:  view.md
[ncp]:   ncp.md

## Установка

Для сборки модулей требуется
установить платформу [Node.js]
(предпочтительно версию LTS)
любым доступным способом.

<details>
<summary>
Под Microsoft Windows
</summary>

рекомендуется использовать
[Scoop],
для этого в консоли PowerShell
наберите

```PowerShell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUse
irm get.scoop.sh | iex
scoop install git
scoop install nodejs-lts
```
</details>

### Репозиторий
Исходный код находится на GitHub
по адресу
https://github.com/ukoloff/kte

```sh
git clone https://github.com/ukoloff/kte
cd kte
```

### Установка зависимостей
```sh
npm install
```

### Тестирование
```sh
npm test
```

### Сборка Web-модуля
```sh
npm run build
```
Все необходимые файлы будут помещены в папку `/bundle`.

Для отладочной сборки дайте команду
```
npm run debug
```

### Использование GitHub Actions
Автоматическое тестирование и сборка
настроены на
https://github.com/ukoloff/kte/actions

Актуальная версия Web-утилит
размещена на GitHub Pages
по адресу
https://ukoloff.github.io/kte/

## Используемое ПО
- [Node.js]
- [JavaScript]
- [LiveScript]
- [Mithril.js]
- [easysax]
- [rollup.js]
- [Mocha]
- [Scoop]
- ...

[Node.js]: https://nodejs.org/
[JavaScript]: https://developer.mozilla.org/ru/docs/Web/JavaScript
[Scoop]: https://scoop.sh/
[Mithril.js]: https://mithril.js.org/
[LiveScript]: https://livescript.net/
[easysax]: https://github.com/vflash/easysax
[rollup.js]: https://rollupjs.org/
[Mocha]: https://mochajs.org/
