function somar(a: number, b: number){
    return a + b;
}

somar(1, 3)

/* somar('a','b')
 * ERROR
 * index.ts(1,30): error TS2304: Cannot find name 'nunber'.
 * index.ts(4,7): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
 */