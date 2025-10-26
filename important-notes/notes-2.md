## javascript important notes to remember

<br>

 - we can use the `console.table()` with providing array of variables 
 the ouptut will be in table variables(roww) with values(column)
    - eg.
        ```js
            va1 = 1;
            va2 = 2;
            va3 = 3;
            console.table([va1,va2,va3]);
        ```

<br>
 
 - we can use "use strict"; // treat all JS code as newer versions
    - example -> in case of strict mode this will give error
        ```js
            "use strict";
            var111 = 90;
            console.log(var111);
        ```

 - undefined means the value is not asigned (typeof) = undefined

<br>

 - null means the value is empty (typeof null) = object

<br>

 - we can use both `typeof 12;` or `typeof (12)`

<br>

 - we can use `Number(score);` to type cast score into number
   - but in case if `score = "12asdb";` it will still convert it to number but value of variable will be NaN (Not a Number)
   
<br>

 - any value can be treated as boolean based on its truth or falsy values given bellow
    |Truth Values                                        |Falsy Values          |
    | :---:                                              | :---:                |
    | Any non-empty string (e.g., "hello", "0", "false") | false                |
    | Any non-zero number (e.g., 1, -5, 3.14, -0.5)      | 0 (the number zero)  |
    | Arrays (even empty ones: [])                       | -0 (negative zero)   |
    | Objects (even empty ones: {})                      | "" (an empty string) |
    |                                                    | null                 |
    |                                                    | undefined            |
    |                                                    | NaN (Not a Number)   |

<br>

 - If you call a function with more or fewer arguments than it declares, JavaScript will not throw an error.

<br>

- we can use the new keyword to use constructor for declration 
  - example
  let num = new Number(); // this num will be of type Object

<br>

 - we can write IIFE (Immediately Invoked Function Expression):
   - benefits : `Global Scope Protection` `Encapsulation` `Data Privacy`
   - also while combining two IIFE we need to use semicolons other wise it will give error
   - eg. 
        ```js
            (function (name) {
                console.log(`it's an IIFE, hello \"${name}\" !`)
            })("chai");
            ((name) => console.log(`it's an IIFE \"${name}\"`))("aur code");
        ```
          
<br>

 - we can use `toLocaleString()` methods to format an number, date, array, etc
   - eg. 
        ```js
        const price = new Number(22.92); // number
        const tarikh = new Date(); // date
        const baksa = [price, tarikh] // array
        Object.freeze(baksa);
        console.table(baksa);

        newBaksa = baksa.toLocaleString("en-IN", {
            style: 'currency', 
            currency:'INR',
            hour12: false});
        console.log("after using toLocaleString()")
        console.table(newBaksa)
        ```