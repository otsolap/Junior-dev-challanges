import { useState } from 'react'
import axios from 'axios'
const apiURL = 'http://localhost:8080/api/coffees'

export default initialState => {
    const [coffees, setCoffees] = useState(initialState)
    return {
        coffees,
        setCoffees,
        getCoffees,
        addNewCoffee
    }
}

function getCoffees() {
    return axios.get(apiURL)
}

export function addNewCoffee(coffee) {
    return axios.post(apiURL, coffee)
}