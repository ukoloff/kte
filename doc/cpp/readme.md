# Модуль распознавания КТЭ

Данный модуль написан на C++
(в среде Visual Studio 2019)
и реализует
[алгоритм распознавания КТЭ][rec].

Исходный код утилиты доступен в
[/rec](../../rec/).

[rec]: ../rec/

## Сборка приложения

- Открыть файл `rec/source/NRecognition.sln` в Visual Studio 2019.
  При запросе установить необходимые дополнительные компоненты.
- Установить `NPRecognition` стартовым проектом
- Установить конфигурацию `Release`
- Построить приложение.
  В папке `Release` все файлы, необходимые для запуска: BRecognize.dll, NCMb.dll, NPRecognition.exe

## Тестирование

Через соответствующее меню Visual Studio.

## Запуск и использование

Формат командной строки:

```bat
NPRecognition <имя входного файла.txt> <имя выходного файла.xml>
```
Код возврата:
+ 0: успешно
+ 1: произошла ошибка.

## Используемое ПО

- [Visual Studio] 2019
- [TinyXML]

[Visual Studio]: https://visualstudio.microsoft.com/
[TinyXML]: https://www.grinninglizard.com/tinyxml/
