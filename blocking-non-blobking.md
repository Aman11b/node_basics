# execution

## blocking

blocking -> blocks the flow of execution untill the task is completed

-> readFileSync

1. starts operation
2. main thread waits
3. operation complted
4. JS continues

## non blocking

-> readFile
--> work is deligated

1. start Operation
2. delagated work
3. main thread continues
   3.2. callback runs
4. operation continue
