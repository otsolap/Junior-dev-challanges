import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CoffeeList from '../components/CoffeeList'
import mockData from '../util/mockData'

describe('coffee list test', () => {
    let coffeeList

    beforeEach(() => {
        coffeeList = render(<CoffeeList coffees={mockData} />)
    })

    it('should find the coffees', () => {
        mockData.forEach((test) => expect(screen.getByText(test.name)).toBeInTheDocument())
    })

    it('should describe 2nd coffee byt its content', () => {
        expect(screen.queryByText(/Paulig New York/i)).toBeInTheDocument()
    })

    it('should not find this coffee', () => {
        expect(screen.queryByText(/Paulig Australia/i)).not.toBeInTheDocument()
    })

    it('should find the 5 default coffees from the mockup data', () => {
        expect(mockData.length).toBe(5)
    })
})