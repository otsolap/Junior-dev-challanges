import React, { useEffect } from 'react'
import Header from './components/Header'
import CoffeeList from './components/CoffeeList';
import NewCoffeeForm from './components/NewCoffeeForm';
import Footer from './components/Footer';
import './App.css';
import useCoffeeState from './hooks/useCoffeeState';


export default function CoffeeApp() {
  const initialCoffees = [
    { _id: 1, name: 'Paulig New York', price: 4.90, weight: 25, roastLevel: 3 },
  ]
  const { coffees, setCoffees, addNewCoffee, getCoffees } = useCoffeeState(initialCoffees)

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadData = async () => {
    const res = await getCoffees()
    setCoffees(res.data)
  }

  const AddCoffee = async coffee => {
    try {
      await addNewCoffee(coffee)
      loadData()
      return
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="CoffeeContainer">
      <Header />
      <NewCoffeeForm
        AddCoffee={AddCoffee}
      />
      <CoffeeList
        coffees={coffees}
      />
      <Footer />
    </div>
  );
}

