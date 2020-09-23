import { total} from "./App";

const add = jest.fn(()=>3);


//Unit test
test('add', ()=>{
    const value = add(1,2);
    expect(value).toBe(3);
    expect(add(5,7)).toBe(12);
})


//Integration test
test('total', ()=>{
    expect(total(5,20)).toBe('$25');
})


// test('Fake Test', ()=>{
//     expect(true).toBeTruthy();
// })
