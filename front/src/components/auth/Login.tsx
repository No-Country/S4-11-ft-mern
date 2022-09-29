import { useState } from 'react'
import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Box, Typography, Button, ButtonBase } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface Values {
    name: string
    password: string
}

const Login: React.FC = () => {
    const { setUser } = useAuth()

    const clientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo!')
            .required('Este campo es obligatorio'),
        password: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo!')
            .required('Este campo es obligatorio'),
    })

    const handleSubmit = (values: Values) => {
        setUser(values)
    }

    return (
        <>
            <Typography sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                Login
            </Typography>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validationSchema={clientSchema}
            >
                {({ errors, touched, handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    alignItems: 'center',
                                }}
                            >
                                <label htmlFor="name">Name</label>
                                <Field
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                                {errors.name && touched.name ? (
                                    <h1>{errors.name}</h1>
                                ) : null}
                                <label htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                {errors.password && touched.password ? (
                                    <h1>{errors.password}</h1>
                                ) : null}
                                <Button
                                    sx={{
                                        backgroundColor: 'green',
                                        color: 'black',
                                        marginTop: '1rem',
                                    }}
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Button
                    sx={{
                        backgroundColor: 'cyan',
                        color: 'black',
                        marginTop: '1rem',
                    }}
                    component={Link}
                    to="/signin"
                >
                    Register
                </Button>
            </Box>
        </>
    )
}

export default Login