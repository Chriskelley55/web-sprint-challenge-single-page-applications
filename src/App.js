import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';
import schema from './Validation/formSchema';
import PizzaForm from "./Components/PizzaForm";
import Pizza from "./Components/Pizza";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  glutenFree: false,
  pepperoni: false,
  sausage: false,
  canBacon: false,
  onions: false,
  special: '',
}

const initialErrorValues = {
  name: '',
  size: '',
  sauce: '',
}

const initialDisabled = true;

const initialPizzas = [];

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrorValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [hidden, setHidden] = useState(false);


  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      })
  };

    const postPizza = newPizza => {
      axios.post('https://reqres.in/api/orders', newPizza)
        .then(res => {
          setPizzas([res.data, ...pizzas]);
        })
        .catch(err => {
          console.log(`Errror! ${err}`);
        })
        .finally(() => {
          setFormValues(initialFormValues);
        })
    };

  const toggleHidden = () => {
    setHidden(!hidden);
  };
  const reveal = () => {
    setHidden(false);
  }


  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value, });
  };

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      glutenFree: false,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canBacon: formValues.canBacon,
      onions: formValues.onions,
      special: formValues.special.trim(),
    }

    postPizza(newPizza);
  };
  
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues]);

  return (
    <div>
      <BrowserRouter>
      <header className='header'>
        <div>
          <h1>Bloom Pizza Factory</h1>
        </div>
      </header>

      {hidden === true ? '' :
        <section>
        <div>
          <div>
            <h2>Code out your Pizza</h2>
            <Link to="/pizza">
              <button id='order-pizza' onClick={toggleHidden}>Create Pizza</button>
            </Link>
          </div>
        </div>
       </section>
      }

      <Switch>
        <Route path='/pizza/complete'>
            <Pizza />
          </Route>
          <Route path='/pizza'>
            <PizzaForm
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;