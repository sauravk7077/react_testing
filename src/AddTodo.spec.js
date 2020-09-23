import React from "react";
import {render} from '@testing-library/react';
import AddTodo from "./AddTodo";

it('should accept value for add add todo', ()=>{
    const mockAddTodo = jest.fn();
    render(<AddTodo addTodo={mockAddTodo}/>)
})