# Установка оркестратора

Для установки всего необходимого для
запуска оркестратора рекомендуется использовать
средства командной строки
Microsoft Windows.

- `Win`+X и выберите PowerShell
- или `Win`+R, наберите `cmd` и нажмите Enter

## Установка Node.js

Можно воспользоваться стандартной установкой
[Node.js],
но лучше использовать [Scoop].
В консоли PowerShell
(без админских прав), наберите:
```PowerShell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
scoop install git
scoop install nodejs-lts
```

## Установка git

Если на предыдущем шаге
Вы использовали [Scoop],
то `git` уже установлен.
Если нет, воспользуйтесь
[стандартным установщиком](https://git-scm.com/downloads)

## Копирование исходных кодов

Создайте рабочую папку,
перейдите в неё в консоли и
загрузите репозитории

```bat
cd path\to\folder
git clone https://github.com/ukoloff/kte
git clone https://github.com/ukoloff/kte.wiki
cd kte
```


[Node.js]: https://nodejs.org/
[Scoop]: https://scoop.sh/

