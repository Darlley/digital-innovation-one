// O Symbol é um identificado único
let misterio = Symbol('Ola mundo');
let misterio2 = Symbol('Ola mundo');
console.log(misterio === misterio2)

const arr = [1,2,3,4]
const st = arr[Symbol.iterator]()
console.log( st.next() )
/*
 * console.log( st.next() )
 * console.log( st.next() )
 * console.log( st.next() )
 * console.log( st.next() )
while (true){
    let value = 
}
 */


const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;
        return {
           next: () => {
               i++;
               return {
                   value: this.values[i-1],
                   done: i > this.values.length
               }
           } 
        }
    }
}

// Symbol iterator , split