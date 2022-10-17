import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { MdPets, MdPerson } from 'react-icons/md'
import { useSelector } from 'react-redux'

export const AdminBoxes = () => {
    const { LostPetsData, FoundPetsData } = useSelector((state) => state.pet)
    const [allPets, setAllPets] = useState([])
    const [reunitedPets, setReunitedPets] = useState([])

    useEffect(() => {
        if (LostPetsData.length > 0 && FoundPetsData.length > 0) {
            setAllPets([...FoundPetsData, ...LostPetsData])
        }
    }, [LostPetsData, FoundPetsData])

    useEffect(() => {
        if (allPets.length > 0) {

            setReunitedPets(allPets.filter((pet)=>pet.meet))

        }
    }, [allPets])

    return (
        <Stack
            direction="row"
            width="100%"
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            gap="20px"
        >
            <Stack
                direction="row"
                width={{ xs: '100%', md: '50%' }}
                justifyContent="space-between"
                gap="20px"
            >
                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        {LostPetsData.length}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPets />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Lost Pets
                        </Typography>
                    </Stack>
                </Stack>

                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        {FoundPetsData.length}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPets />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Found Pets
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                justifyContent="space-between"
                gap="20px"
                width={{ xs: '100%', md: '50%' }}
            >
                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        {reunitedPets.length}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPets />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Reunited
                        </Typography>
                    </Stack>
                </Stack>

                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        Untracked
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPerson />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Users
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AdminBoxes