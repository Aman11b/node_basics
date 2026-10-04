# cluster

normal js
-> one main JS thread
-> cluster module - start multiples node js worker processes

each and every worker process->
has its owrn nodejs runtime, v8 engine,event loop,memory, and main js thread

1. Incomming Request
   1.1 Primary process (start process, watch on it ,restart failed wroker,coordinates life cycle)
   1.1.1 Worker process 1-> CPU core 1
   1.1.2 Worker process 2-> CPU core 2
   1.1.3 Worker process 3-> CPU core 3
   1.1.4 Worker process 4-> CPU core 4
   1.2 Shared server port
2. request distribution
