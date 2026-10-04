# V8 engine

-> js engine used by nodejs

-> parse JS (internal represntation code)
-> byte code
-> execute code

--> manage callstack
--> manage heap
--> garbage collection

## flow

1. JS source code
2. parser(check for syntax error)
3. Abstarct syntax tree
4. byte code
5. interpretor
6. optimised machine code
7. code executes
