import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
    //? useNavigate sirve para redireccionar automaticamente.
    const navigate = useNavigate();

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string().required(
            'El nombre de la empresa es obligatorio'
        ),
        email: Yup.string()
            .required('El email es obligatorio')
            .email('Email no valido'),
        telefono: Yup.number()
            .integer('numero no valido')
            .positive('numero no valido')
            .typeError('El numero de telefono no tiene un formato valido'),
        notas: '',
    });

    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/clientes';

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(respuesta);
            const resultado = await respuesta.json();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-white mt-10 rounded-md px-5 py-10 shadow-md shadow-slate-500/50 md:w-3/4 mx-auto'>
            <h1 className='text-xl font-bold text-gray-600 text-center uppercase'>
                Agregar Cliente
            </h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',
                }}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);

                    resetForm();
                    navigate('/clientes');
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({ errors, touched }) => {
                    // console.log(data);
                    return (
                        <Form className='mt-10'>
                            <div className='mb-4'>
                                <label
                                    className='text-gray-800 pl-3'
                                    htmlFor='nombre'
                                >
                                    Nombre:{' '}
                                </label>
                                <Field
                                    id='nombre'
                                    type='text'
                                    className='block mt-2 rounded-md w-full border-2 p-3 bg-gray-50'
                                    placeholder='Nombre del Cliente'
                                    name='nombre'
                                />
                                {/* {errors.nombre && touched.nombre && (
                                    <div>{errors.nombre}</div>
                                )} */}
                                <Alert name={'nombre'} />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='text-gray-800 pl-3'
                                    htmlFor='empresa'
                                >
                                    Empresa:{' '}
                                </label>
                                <Field
                                    id='empresa'
                                    type='text'
                                    className='block mt-2 rounded-md w-full border-2 p-3 bg-gray-50'
                                    placeholder='Empresa del Cliente'
                                    name='empresa'
                                />
                                <Alert name={'empresa'} />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='text-gray-800 pl-3'
                                    htmlFor='email'
                                >
                                    Email:{' '}
                                </label>
                                <Field
                                    id='email'
                                    type='email'
                                    className='block mt-2 rounded-md w-full border-2 p-3 bg-gray-50'
                                    placeholder='Email del Cliente'
                                    name='email'
                                />
                                <Alert name={'email'} />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='text-gray-800 pl-3'
                                    htmlFor='telefono'
                                >
                                    Teléfono:{' '}
                                </label>
                                <Field
                                    id='telefono'
                                    type='tel'
                                    className='block mt-2 rounded-md w-full border-2 p-3 bg-gray-50'
                                    placeholder='Teléfono del Cliente'
                                    name='telefono'
                                />
                                <Alert name={'telefono'} />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='text-gray-800 pl-3'
                                    htmlFor='notas'
                                >
                                    Notas:{' '}
                                </label>
                                <Field
                                    as='textarea'
                                    id='notas'
                                    type='text'
                                    className='block mt-2 rounded-md w-full border-2 p-3 bg-gray-50 h-48'
                                    placeholder='Notas del Cliente'
                                    name='notas'
                                />

                                <input
                                    type='submit'
                                    value='Agregar Cliente'
                                    className=' mt-5 w-full bg-gradient-to-r from-blue-800 to-blue-900 p-3 text-white font-bold uppercase rounded-xl text-lg '
                                />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Formulario;
