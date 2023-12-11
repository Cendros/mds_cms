import { request } from "../utils/request"

export const getHome = async () => {
    return await request({
        route: '/homepage?populate[0]=Carousel.recipes.type&populate[1]=Carousel.recipes.Image',
        method: 'get'
    });
}