// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.
// 3.Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    const stack = [];
    const parens = '() [] {}';
    let i = 0;
 
     while(i < s.length){
         stack.push(s[i]);
         i++;
 
         let open = stack[stack.length - 2];
         let closed = stack[stack.length - 1];
 
         let reqparens = open + closed;
         if(parens.includes(reqparens)){
          stack.pop();
          stack.pop();
          }
 
     }
     return stack.length === 0;
 
 };
