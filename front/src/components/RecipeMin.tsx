import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardTitle, useIonModal } from '@ionic/react';
import React from 'react';
import { PUBLIC_URL } from '../consts/api';
import Recipe from './Recipe';

type RecipeProps = {
    recipe: Record<string, any>
}

const RecipeMin: React.FC<RecipeProps> = ({ recipe }) => {
    const RecipeModal = ({onDismiss}: {onDismiss: () => void}) => {
        return (
            <Recipe id={recipe.id} dismiss={onDismiss} />
        )
    }

    const [presentRecipe, dismissProfile] = useIonModal(RecipeModal, {
        onDismiss: () => dismissProfile()
    });

    return (
        <IonCard className='w-full m-0' color='primary' onClick={() => presentRecipe()}>
            { recipe.attributes.Image.data ?
                <img className='w-full aspect-1' src={`${PUBLIC_URL}${recipe.attributes.Image.data.attributes.formats.small.url}`} />
            :
                <img className='w-full aspect-1' src={'/assets/placeholder.png'} />
            }
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