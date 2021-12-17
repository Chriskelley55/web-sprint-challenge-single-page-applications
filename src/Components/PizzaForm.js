import React from 'react';
import { Link } from 'react-router-dom';

const PizzaForm = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueCheck = type === 'checkbox' ? checked : value;
        change(name, valueCheck);
    }

    return (
        <div className='form-page'>
            <h2>Build Your Pizza</h2>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div className='form-group'>
                <label className='choice'>
                        <h3>Name</h3>
                        <span className='requiredText'>Required*</span>
                    </label>
                    <input
                        id='name-input'
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />

                    <label className='choice'>
                    <h3>Choice of Size</h3>
                        <span className='requiredText'>Required*</span>
                    </label>
                    <select
                        id='size-dropdown'
                        name='size'
                        value={values.size}
                        onChange={onChange}>
                            <option value=''>--Select--</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                    
                    <label className='choice'>
                        <h3>Choice of Sauce</h3>
                        <span className='requiredText'>Required*</span>
                    </label>
                    <div className='checkable'>
                        <div className='radio'>
                            <input 
                                id='sauce-radio'
                                type='radio'
                                name='sauce'
                                value='Original Red'
                                checked={values.sauce === 'Original Red'}
                                onChange={onChange}/>
                            <label>Original Red</label>
                        </div>
                        <div className='radio'>
                            <input
                                id='sauce-radio'
                                type='radio'
                                name='sauce'
                                value='Garlic Ranch'
                                checked={values.sauce === 'Garlic Ranch'}
                                onChange={onChange}/>
                            <label>Garlic Ranch</label>
                        </div>
                        <div className='radio'>
                            <input
                                id='sauce-radio'
                                type='radio'
                                name='sauce'
                                value='BBQ Sauce'
                                checked={values.sauce === 'BBQ Sauce'}
                                onChange={onChange}/>
                            <label>BBQ Sauce</label>
                        </div>
                        <div className='radio-check'>
                            <input
                                id='sauce-radio'
                                type='radio'
                                name='sauce'
                                value='Spinach Alfredo'
                                checked={values.sauce === 'Spinach Alfredo'}
                                onChange={onChange}/>
                            <label>Spinach Alfredo</label>
                        </div>
                    </div>

                    <label className='choice'>
                        <h3>Add Toppings</h3>
                        <span className='requiredText'>Choose up to 10.</span>
                    </label>
                    <div className='checkable'>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}/>
                            <label>Pepperoni</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}/>
                            <label>Sausage</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='canBacon'
                                checked={values.canBacon}
                                onChange={onChange}/>
                            <label>Canadian Bacon</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='onions'
                                checked={values.onions}
                                onChange={onChange}/>
                            <label>Onions</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='greenPeppers'
                                checked={values.greenPeppers}
                                onChange={onChange}/>
                            <label>Green Peppers</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='dicedTomatoes'
                                checked={values.dicedTomatoes}
                                onChange={onChange}/>
                            <label>Diced Tomatoes</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='blackOlives'
                                checked={values.blackOlives}
                                onChange={onChange}/>
                            <label>Black Olives</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='roastedGarlic'
                                checked={values.roastedGarlic}
                                onChange={onChange}/>
                            <label>Roasted Garlic</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='artichoke'
                                checked={values.artichoke}
                                onChange={onChange}/>
                            <label>Artichoke</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='threeCheese'
                                checked={values.threeCheese}
                                onChange={onChange}/>
                            <label>Three Cheese</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={onChange}/>
                            <label>Pineapple</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='checkbox'
                                name='extraCheese'
                                checked={values.extraCheese}
                                onChange={onChange}/>
                            <label>Extra Cheese</label>
                        </div>
                    </div>

                    <label className='choice'><h3>Special Instructions</h3></label>
                    <input
                        id='special-text'
                        name='special'
                        type='text'
                        value={values.special}
                        onChange={onChange}
                    />
                </div>

                <div className='form-group submit'>
                    <div className='errors'>
                        <p>{errors.name}</p>
                        <p>{errors.size}</p>
                        <p>{errors.sauce}</p>
                    </div>

                    <Link to='/pizza/complete'>
                        <button id='order-button' disabled={disabled}>Add to Order</button>
                    </Link>
                </div>
            </form>
        </div>
    )
};

export default PizzaForm;



