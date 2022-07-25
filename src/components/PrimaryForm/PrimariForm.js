import React from 'react';
import '../PrimaryForm/PrimaryForm.scss';
import { useForm } from 'react-hook-form';

export default function Form() {
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

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    };
    return (
        <div className='primary-form'>
            <div className='container'>
                <h3>Primary Form</h3>
                <div className='form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <select className='form-control'>
                            {country.map((country, key) => (
                                <option value={country.name} key={key}>
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
                                minLength: 12,
                                maxLength: 12,
                            })}
                        />
                        <error>
                            {errors.number?.type === 'minLength' &&
                                'Entered number is less than 12 digits'}
                            {errors.number?.type === 'maxLength' &&
                                'Entered number is more than 12 digits'}
                        </error>

                        <div className='gender'>
                            <div className='radio-btn'>
                                <input
                                    type='radio'
                                    id='male'
                                    name='gender'
                                    value='male'
                                    className='radio-input'
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
                                />
                                <label htmlFor='female'>Female</label>
                            </div>
                        </div>
                        <div>
                            <input className='button' type='submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
