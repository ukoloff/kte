# KTE

Automated CAM for Turning

## Архитектура

```mermaid

flowchart TD

DXF([.dxf]) --> S0[[Ввод технологических параметров]]
S0 --> TXT[.txt]
TXT --> S1[[Распознавание КТЭ]]
TXT -.-> S0
S1 --> XML([.xml])
XML --> S2[[Технологический алгоритм]]
XML -.-> V[[Визуализация КТЭ]]
S2 --> G([G-код])
DB[[Подбор <br>инструмента <br>и режима резки]] <--csv--> S2
TXT --> S2

%% click XML href "a"

```

## Used software

- [LiveScript]
- [Mithril.js]
- [easysax]
- [rollup.js]
- ...

[Mithril.js]: https://mithril.js.org/
[LiveScript]: https://livescript.net/
[easysax]: https://github.com/vflash/easysax
[rollup.js]: https://rollupjs.org/
