import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from '../Components/TodoList'
import mockData from '../util/mockData'

describe('todo list test', () => {
    let todoList

    beforeEach(() => {
        todoList = render(<TodoList todos={mockData} />)
    })

    it('should find the tasks', () => {
        mockData.forEach((test) => expect(screen.getByText(test.task)).toBeInTheDocument());
    });

    it('should describe Task two by its content', () => {
        expect(screen.queryByText(/Call Alice/i)).toBeInTheDocument();
    })

    it('should not find this fake task', () => {
        expect(screen.queryByText(/Learn Context API/i)).not.toBeInTheDocument();
    })

    it('should find 5 default Todos from the mockup Data', () => {
        expect(mockData.length).toBe(5);
    })

});
