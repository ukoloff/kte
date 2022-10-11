# Документация

## Архитектура

```mermaid
%% VSCode:
%% bierner.markdown-mermaid
%% bpruitt-goddard.mermaid-markdown-syntax-highlighting

flowchart TD

DXF([.dxf]) --> S0[[Ввод технологических параметров]]
S0 --> TXT([.txt])
TXT --> S1[[Распознавание КТЭ]]
TXT -.-> S0
S1 --> XML([.xml])
XML --> S2[[Технологический алгоритм]]
XML -.-> V[[Визуализация КТЭ]]
S2 --> G([G-код])
DB[[Подбор <br>инструмента <br>и режима резки]] <--csv--> S2
XLS[(Инструменты)] -.-> DB
TXT --> S2

click S1 href "rec"
click S2 href "lathe"

```

## Программные модули
+ Интерактивная утилита конвертации DXF-файла и ввода технологических параметров (Web)
+ Утилита распознавания КТЭ (командная строка)
+ Утилита выбора инструмента и режима резания
+ Утилита просмотра списка КТЭ (Web)
+ Утилита генерации управляющих программ (командная строка)

## Форматы файлов данных
+ [DXF]
+ [STEP]
+ Задание на распознавание КТЭ
+ [Список КТЭ][kte]
+ Модуль поиска инструмента и режимов резания
  - Входной файл
  - Выходной файл

[DXF]: http://images.autodesk.com/adsk/files/autocad_2012_pdf_dxf-reference_enu.pdf
[STEP]: https://www.loc.gov/preservation/digital/formats/fdd/fdd000448.shtml
[kte]: rec/RecognitionResultFileFormat.docx

## Описания алгоритмов

- [Распознавание КТЭ](rec)
- [Технологический алгоритм](lathe)
