import { request } from "../utils/request"

export const getHome = async () => {
    return await request({
        route: '/homepage?populate[0]=Carousel.recipes.type&populate[1]=Carousel.recipes.Image',
        method: 'get'
    });
}

export const getRecipe = async (id: number) => {
    return await request({
        route: `/recipes/${id}?populate=*`,
        method: 'get'
    })
}

export const getRecipes = async () => {
    return await request({
        route: '/recipes?populate=*',
        method: 'get'
    })
}

export const deleteRecipeApi = async (id: number) => {
    return await request({
        route: `/recipes/${id}`,
        method: 'delete'
    })
}

export const createRecipe = async (name: string, description: string, ingredients: string, typeId: number) => {
    return await request({
        route: '/recipes',
        method: 'post',
        body: {
            data: {
                Name: name,
                Description: description,
                Ingredients: ingredients,
                type: typeId
            }
        }
    })
}

export const editRecipe = async (id: number, name: string, description: string, ingredients: string, typeId: number) => {
    return await request({
        route: `/recipes/${id}`,
        method: 'put',
        body: {
            data: {
                Name: name,
                Description: description,
                Ingredients: ingredients,
                type: typeId
            }
        }
    })
}

export const getTypes = async () => {
    return await request({
        route: '/types',
        method: 'get'
    })
}