import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecipeMin from './RecipeMin';

import 'swiper/css';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';

type CarouselProps = {
    data: {
        Title: string,
        recipes: any
    }
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
    return (
        <>
            <h2 className='align-self-start font-bold'>{data.Title}</h2>
                { data.recipes.data?.length ?
                    <Swiper
                        pagination
                    >
                        { data.recipes.data.map((recipe: any, i: number) => (
                            <SwiperSlide key={i}>
                                <RecipeMin recipe={recipe} />
                            </SwiperSlide>
                        )) }
                    </Swiper>
                : null }
        </>
    )
}

export default Carousel;