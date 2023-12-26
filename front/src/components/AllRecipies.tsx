import React from 'react';
import useRecipes from '../hooks/useRecipes';
import Loading from './Loading';
import RecipeMin from './RecipeMin';

const AllRecipies: React.FC = () => {
    const recipes = useRecipes();

    return (
        <>
            <h2>Toutes les recettes</h2>
            { recipes ?
                <div className='grid grid-nogutter'>
                    { recipes.length ?
                        <>
                            { recipes.map((recipe, i) => (
                                <div key={i} className='col p-2'>
                                    <RecipeMin recipe={recipe} />
                                </div>
                            ))}
                        </>
                    :
                        <span>Aucune recette</span>
                    }
                </div>
            :
                <Loading text='Chargement des recettes' />
            }
        </>
    )
}

export default AllRecipies;