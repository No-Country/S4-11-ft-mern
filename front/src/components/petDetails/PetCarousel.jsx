import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-carousel-minimal'
import { useSelector } from 'react-redux'

const PetCarousel = () => {
    const { petDetail } = useSelector((state) => state.pet)
    const [data, setData] = useState([])

    const loadData = () => {
        let images = []

        petDetail.img.map((item) => {
            images.push({ image: item })
        })

        setData(images)
    }

    useEffect(() => {
        petDetail != undefined && loadData()
    }, [petDetail])

    useEffect(() => {
        console.log(data)
    }, [data])

    // const data = [
    //     {image: `${petDetail?.img[0]}`},
    //     {image: `${petDetail?.img[1]}`},
    //     {image: `${petDetail?.img[2]}`},
    //     {image: `${petDetail?.img[3]}`},
    //   ];

    return (
        <Stack width="750px" height="330px" sx={{}} mt="10px">
            {data.length && (
                <Carousel
                    data={data}
                    width="750px"
                    height="330px"
                    radius="10px"
                    dots={false}
                    automatic={false}
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                />
            )}
        </Stack>
    )
}

export default PetCarousel
