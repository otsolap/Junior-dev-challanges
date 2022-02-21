import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NewCoffeeForm from '../components/NewCoffeeForm'

describe('New Coffee Form testing', () => {
    let coffeeForm

    beforeEach(() => {
        coffeeForm = render(<NewCoffeeForm />)
    })

    test('renders the form for creating a new favourite coffee', () => {
        const FormElement = screen.getByRole('form')
        expect(FormElement).toBeInTheDocument()
    })

    test('renders the input field for creating new favourite coffee items', () => {
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()
    })

    test('Weight input element has placeholder text "Enter weight in grams" in the input field', () => {
        const placeholderText = screen.getByPlaceholderText('Enter weight in grams')
        expect(placeholderText).toBeInTheDocument()
    })

    test('renders the submit button', () => {
        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument()
    })

})