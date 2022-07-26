import { React, useState } from 'react';
import '../PrimaryForm/PrimaryForm.scss';
import { useForm } from 'react-hook-form';

export default function Form() {
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedState, setSelectedState] = useState();
    const country = [
        {
            id: 1,
            name: 'India',
        },
        {
            id: 2,
            name: 'Usa',
        },
        {
            id: 3,
            name: 'Canada',
        },
    ];
    const State = [
        {
            id: 1,
            name: 'Delhi',
            country_id: 1,
        },
        {
            id: 2,
            name: 'Ahemdabad',
            country_id: 1,
        },
        {
            id: 3,
            name: 'Chennai',
            country_id: 1,
        },
        {
            id: 4,
            name: 'Texas',
            country_id: 2,
        },
        {
            id: 5,
            name: 'Alaska',
            country_id: 2,
        },
        {
            id: 6,
            name: 'Ohio',
            country_id: 2,
        },
        {
            id: 7,
            name: 'Florida',
            country_id: 2,
        },
        {
            id: 8,
            name: 'Nova Scotia',
            country_id: 3,
        },
        {
            id: 9,
            name: 'Nova Scotia',
            country_id: 3,
        },
        {
            id: 10,
            name: 'Quebec',
            country_id: 3,
        },
        {
            id: 11,
            name: 'Torento',
            country_id: 3,
        },
    ];

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        // e.target.reset();
    };

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);

        console.log(selectedCountry);
        console.log(event.target.value);
    };

    return (
        <div className='primary-form'>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='forms'>
                        <div className='form1'>
                            <h3>Primary Form</h3>
                            {/* <div className='form-control'> */}
                            <input
                                placeholder='First Name'
                                className='form-control'
                                {...register('name', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                            />
                            <error>
                                {errors.name?.type === 'required' &&
                                    'Name is required'}
                                {errors.name?.type === 'minLength' &&
                                    'Name should have at list 3 charactor'}
                            </error>
                            {/* </div> */}
                            <input
                                placeholder='Last Name'
                                className='form-control'
                                {...register('lname', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                            />
                            <error>
                                {errors.lname?.type === 'required' &&
                                    'Last Name is required'}
                                {errors.lname?.type === 'minLength' &&
                                    'Name should have at list 3 charactor'}
                            </error>
                            <select
                                {...register('country')}
                                className='form-control'
                                onChange={handleChange}
                                value={selectedCountry}
                                id={selectedState}>
                                {/* {country.map((country, key) => (
                                <option
                                    id={country.id}
                                    value={country.name}
                                    key={key}
                                    {...register('Country', {
                                        required: true,
                                    })}>
                                    {country.name}
                                </option>
                            ))} */}
                                {country.map((country) => (
                                    <option
                                        value={country.name}
                                        id={country.id}
                                        key={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                placeholder='Email'
                                className='form-control'
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                })}
                            />
                            <error>
                                {errors.email?.type === 'required' &&
                                    'Email is required'}
                                {errors.email?.type === 'pattern' &&
                                    'Entered email is in wrong format'}
                            </error>
                            <input
                                type='digit'
                                placeholder='Phone Number'
                                className='form-control'
                                {...register('number', {
                                    minLength: 10,
                                    maxLength: 10,
                                })}
                            />
                            <error>
                                {errors.number?.type === 'minLength' &&
                                    'Entered number is less than 10 digits'}
                                {errors.number?.type === 'maxLength' &&
                                    'Entered number is more than 10 digits'}
                            </error>
                            <div className='gender'>
                                <div className='radio-btn'>
                                    <input
                                        type='radio'
                                        id='male'
                                        name='gender'
                                        value='male'
                                        className='radio-input'
                                        {...register('gender')}
                                        checked
                                    />
                                    <label htmlFor='male'>Male</label>
                                </div>
                                <div className='radio-btn'>
                                    <input
                                        type='radio'
                                        id='female'
                                        name='gender'
                                        value='female'
                                        className='radio-input'
                                        {...register('gender')}
                                    />
                                    <label htmlFor='female'>Female</label>
                                </div>
                            </div>
                            {/* {console.log(register[country]);}
                        <select className='form-control'>
                            {State.map((state, key) =>
                                state.country_id === register.id ? (
                                    <option
                                        value={state.name}
                                        key={key}
                                        {...register('states', {
                                            required: true,
                                        })}>
                                        {state.name}
                                    </option>
                                ) : null
                            )}
                        </select> */}
                        </div>
                        <div className='form2'>
                            <h3>Secondary Form</h3>
                            {/* <div className='form-control'> */}
                            <select name='state' className='form-control'>
                                {State.map((state) => (
                                    <option value={state.name}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='submit-btn'>
                        <input className='button' type='submit' />
                    </div>
                </form>
            </div>
        </div>
    );
}
