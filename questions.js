// 11.Element equals its index
// Учитывая отсортированный массив различных целых чисел, напишите функцию index Equals Value,
// которая возвращает наименьший индекс, для которого array[index] == index.
// Возвращает -1, если такого индекса нет.
// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2
// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index


//Пишет, что оба варианта слишком медленные и превышают время ожидания.

function indexEqualsValue(a) {
    return a.findIndex((item, index)=> item == index)
        
    //     for (let i = 0; i < a.length; i++) {
    //         if (i == a[i]) {
    //             return i;
    //             break;
    //         } 
    //   }
    //   return -1
    }
    
      console.log(indexEqualsValue([-8,0,2,5])); //2

      
// 15.Is a number prime
// Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true 
// или false в зависимости от того, является ли целое число простым.
// Согласно Википедии, простое число (или a prime ) - это натуральное число, большее 1, 
// которое не имеет положительных делителей, кроме 1 и самого себя.


//Пишет, что решение превышает время ожидания

function isPrime(num) {
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false; 
          break;
      }
  }
  return num > 1
}

console.log(isPrime(4)); //false, "1 is not prime", true, "2 is prime"


// 13.Evaluating prefix Polish notation
// Сделала решение, но оно не проходит некоторые тесты, а какое в этих тестах входящее значение не понятно.

function calculate(expression) {
    let newExpression = expression.replaceAll(' ', '')
    console.log(newExpression.charCodeAt(2));
    function isOperand(c) {
        if ((c.charCodeAt() >= 48 && c.charCodeAt() <= 57) || c.charCodeAt() === 46)
            return true;
        else
            return false;
    }
    let stack = [];
    for (let j = newExpression.length - 1; j >= 0; j--) {
        if (isOperand(newExpression[j])) {
            newExpression[j] !== "." ? stack.push((newExpression[j].charCodeAt() - 48)) : stack.push(newExpression[j])
        } else {
            let o1 = stack[stack.length - 1];//2
            stack.pop();
            let o2 = stack[stack.length - 1];//2
            stack.pop();
            switch (newExpression[j]) {
                case '+':
                    stack.push(o1 + o2);
                    break;
                case '-':
                    stack.push(o1 - o2);
                    break;
                case '*':
                    stack.push(o1 * o2);
                    break;
                case '/':
                    stack.push(o1 / o2);
                    break;
            }
        }
    }
    return Number(Stack.reverse().join(""));
}

// console.log(calculate('12.456'));


