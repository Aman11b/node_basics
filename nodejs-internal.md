### main js thread

-> normal application js executres on one main JS thread

### v8 engine

-> parsing JS
-> executre JS
-> managing callstack
-> manage heep memory and performing garbage collection

### node js core API

-> fs,http,path,streams,buffers,process,timers
-> some of this is written in JS

### c++ binding

-> connect JS facing API to native functionality
-> JS code communicates with
--> libuv
--> os apis
--> native libraries

### libuv

-> native lib used by nodejs
--> event loop,worker thread pool,timers, async i/o handling

### OS

-> low level work
-> reading files
-> writing file
-> tacking time
