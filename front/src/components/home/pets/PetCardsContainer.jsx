import { Stack, Typography, Button } from '@mui/material'
import PetCard from './PetCard'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getPets } from '../../../redux/asyncActions/pet/getPets'
import Loading from '../../loading/Loading'

const PetCardsContainer = (props) => {
    const dispatch = useDispatch()
    const type = props.title
    const { LostPetsData, FoundPetsData, status } = useSelector(
        (state) => state.pet
    )
    const [limitedLostPetsData, setLimitedLostPetsData] = useState([])
    const [limitedFoundPetsData, setLimitedFoundPetsData] = useState([])

    useEffect(() => {
        dispatch(getPets(type))
    }, [])

    useEffect(() => {
        LostPetsData?.length > 0 &&
            setLimitedLostPetsData(LostPetsData.slice(0, 4))
    }, [LostPetsData])

    useEffect(() => {
        FoundPetsData?.length > 0 &&
            setLimitedFoundPetsData(FoundPetsData.slice(0, 4))
    }, [FoundPetsData])

    return (
        <Stack gap="25px">
            <Typography
                variant="h3"
                color={props.color}
                fontFamily={'Merriweather'}
                fontWeight="bold"
                px="30px"
            >
                {props.title} Pets
            </Typography>
            <Stack direction="row" justifyContent={'center'} gap="24px">
                {status === 'success' ? (
                    <PetCard
                        pets={
                            type === 'Lost'
                                ? limitedLostPetsData
                                : limitedFoundPetsData
                        }
                    />
                ) : (
                    <Loading />
                )}
            </Stack>
            <Button
                component={Link}
                to={`/${props.title.toLowerCase()}Pets`}
                variant="contained"
                color={
                    props.title.toLowerCase() === 'lost'
                        ? 'secondary'
                        : 'primary'
                }
                sx={{
                    textTransform: 'none',
                    px: '100px',
                    mx: 'auto',
                    borderRadius: '8px',
                }}
            >
                View all {props.title.toLowerCase()} pets
            </Button>
        </Stack>
    )
}

export default PetCardsContainer
