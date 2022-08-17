1. inside the for loop declaration i(0) is checked to see if it is less than 100 (true)

2. ++i increments i to 1 
    **(placing the operator(++) before the operand(1) increments the operator before returning it**

3. check to see if 1 % 3 is true or false it is true so it returns an empty string
   so far:   ("")  +  (i % 5 ? " : "Buzz") || i
          left side         right side

4. evaluate the right side of the terenary i % 5 (true). right side returns an empty string
    now we have: console.log("" + "" || i)

5. ("" + "") evaluates to an ""
    now we have console.log("" || i)

6. evaluate the logical || operator.  since an empty string is false it is skipped and i is returned
    now we have console.log(i)... since i is = 1;  1 is logged to the console.

7. control returns to the for loop declaration and i is compared to < 100 (true)

8. on the next pass, i is incremented to 2

9. 2 % 3 is true. "" is returned for the left side

10. 2 % 5 is true. "" is returned for the right side

11. "" + "" evaluates to ""
    now we have: consoole.log("" || i)

12. the empty string is skipped so i is returned which is 2. 2 is printed to the console

13. control returns to the for statement i(2) is compared to determine if it is < 100 (true)

14. control passes to the console.log function

15. i is incremented to 3

16. 3 % 3 is false. The left side of the terenary returns "Fizz+
27217