import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import { PUBLIC_URL } from '../consts/api';

type RecipeProps = {
    recipe: Record<string, any>
}

const RecipeMin: React.FC<RecipeProps> = ({ recipe }) => {
    console.log(recipe);
    
    return (
        <IonCard className='w-6' color='primary'>
            <img className='w-full aspect-1' src={`${PUBLIC_URL}${recipe.attributes.Image.data.attributes.formats.small.url}`} />
            <IonCardHeader>
                <IonCardTitle>{recipe.attributes.Name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonBadge color='secondary'>{recipe.attributes.type.data.attributes.Name}</IonBadge>
            </IonCardContent>
        </IonCard>
    )
}

export default RecipeMin;