# libuv

-> native library used by Node js

-> help node js to handele async operation across different os system

-> Libuv provides
--> event loop
--> worker thread pool
--> timer
--> aync i/o operation

1. JS
2. nodejs core Api
3. C++ BINDING
4. LIBUV
5. thread pool
6. event loop[complted io opeartion,timer,pending activities,socket]
7. Operating systen

-> thread pool
libuv porvied shared worker thread pool
-> opeartion that cant be handle efficeintly
--> many file system opeartion,compression,timer

-> timer
--> libuv helps node js track those timer and determine when the timer is eligible to execute
