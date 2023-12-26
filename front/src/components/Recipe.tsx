import { IonAlert, IonButton, IonChip, IonContent, IonIcon, IonPage, useIonModal } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { ModalProps } from '../types/components';
import Header from './Header';
import { arrowBack, pencil, trash } from 'ionicons/icons';
import useRecipe from '../hooks/useRecipe';
import Loading from './Loading';
import { PUBLIC_URL } from '../consts/api';
import { deleteRecipeApi } from '../services/api';
import Form from './Form';

type RecipeProps = {
    id: number
}

const Recipe: React.FC<RecipeProps & ModalProps> = ({ id, dismiss }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { recipe, fetchRecipe } = useRecipe();

    const FormModal = ({onDismiss}: {onDismiss: () => void}) => {
        return (
            <Form dismiss={onDismiss} recipe={recipe} />
        )
    }

    const [presentForm, dismissForm] = useIonModal(FormModal, {
        onDismiss: () => dismissForm()
    });

    useEffect(() => {
        fetchRecipe(id);
    }, []);

    const modifyRecipe = () => {
        presentForm();
    }

    const deleteRecipe = async () => {
        if (!recipe)
            return;
        await deleteRecipeApi(id);
        
        setIsOpen(false);
        dismiss();
        location.href = '/home';
    }

    const left = (
        <IonButton fill='clear' onClick={dismiss}>
            <IonIcon size='large' icon={arrowBack} />
        </IonButton>
    );

    return (
        <IonPage>
            <Header left={left} />
            <IonContent fullscreen className='bg-light ion-padding'>
                { recipe ?
                    <>
                        <div className='flex justify-content-center'>
                            { recipe.Image.data ?
                                <img className='w-6 aspect-1' src={`${PUBLIC_URL}${recipe.Image.data.attributes.formats.small.url}`} />
                            :
                                <img className='w-6 aspect-1' src={'/assets/placeholder.png'} />
                            }
                        </div>
                        <h2>{recipe.Name}</h2>
                        { recipe.type.data ?
                            <IonChip color='primary'>{recipe.type.data.attributes.Name}</IonChip>
                        : null }
                        <p>{recipe.Description}</p>

                        <div className='border-bottom-1 border-primary' />
                        <h3 className='font-bold'>Ingrédients</h3>
                        {recipe.Ingredients ?
                            <p className='white-space-prewrap'>{recipe.Ingredients}</p>
                        :
                            <p>Aucun ingrédient</p>
                        }

                        <div className='flex flex-row justify-content-between gap-3'>
                            <IonButton shape='round' onClick={() => modifyRecipe()}>
                                Modifier
                                <IonIcon slot='end' icon={pencil} />
                            </IonButton>
                            <IonButton shape='round' color='danger' onClick={() => setIsOpen(true)}>
                                Supprimer
                                <IonIcon slot='end' icon={trash} />
                            </IonButton>
                        </div>
                    </>
                : <Loading text='Chargement de la recette' />}
            </IonContent>
            <IonAlert
                isOpen={isOpen}
                header="Attention"
                message="Voulez-vous supprimer cette recette ?"
                buttons={[
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        handler: () => setIsOpen(false)
                    },
                    {
                        text: 'Supprimer',
                        role: 'confirm',
                        handler: () => deleteRecipe(),
                        cssClass: 'alert-danger'
                    },
                ]}
            ></IonAlert>
        </IonPage>
    )
}

export default Recipe;