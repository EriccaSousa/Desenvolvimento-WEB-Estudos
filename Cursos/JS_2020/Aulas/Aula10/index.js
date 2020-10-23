/*
> maior que;
>= maior que ou igual a;
< menor que;
<= menor que ou igual a;
== igualdade (Não é legal usar);
=== igualdade estrita (Checa valor e tipo);
!= diferente (Não é legal usar);
!== diferente estrito (Checa valor e tipo);
*/

console.log(10 > 5);

const comp = 2 <= 1;
console.log(comp);

// Caso de erro na igualdade usando '=='; por isso não usar;
const num1 = 10;
const num2 = '10';

const comp2 = num1 == num2;

console.log(comp2);

// Correto, utilizando '===';
const num3 = 10;
const num4 = '10';

const comp3 = num3 === num4;

console.log(comp3);

// A mesma coisa para '!=' e !=='

