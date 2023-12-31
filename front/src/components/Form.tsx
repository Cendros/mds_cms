import React, { useEffect, useRef, useState } from 'react';
import useTypes from '../hooks/useTypes';
import { createRecipe, editRecipe } from '../services/api';
import { IonButton, IonContent, IonIcon, IonInput, IonPage, IonSelect, IonSelectOption, IonSpinner, IonText, IonTextarea } from '@ionic/react';
import Header from './Header';
import Loading from './Loading';
import { ModalProps } from '../types/components';
import { arrowBack } from 'ionicons/icons';

type FormProps = Partial<ModalProps> & {
    recipe?: Record<any, any>
}

const Form: React.FC<FormProps> = ({ dismiss, recipe }) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [type, setType] = useState<number>(0);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const types = useTypes();
    
    const t = useRef<HTMLIonTextareaElement>(null);

    useEffect(() => {
        if (!recipe)
            return;

        setName(recipe.Name);
        setDescription(recipe.Description);
        setIngredients(recipe.Ingredients);
        setType(recipe.type.data?.id ?? 0);
    }, [recipe]);

    const newRecipe = async () => {
        if (!name) {
            setError("Le nom est requis");
            return;
        }
        setSubmitting(true);
        
        if (recipe)
            await editRecipe(recipe.id, name, description, ingredients, type)
        else await createRecipe(name, description, ingredients, type);
        setSubmitting(false);

        setName('');
        setDescription('');
        setIngredients('');
        setType(0);

        location.href = '/';
    }

    const left = (
        <>
            { recipe ?
                <IonButton fill='clear' onClick={dismiss}>
                    <IonIcon size='large' icon={arrowBack} />
                </IonButton>
            : null }
        </>
    );

    return (
        <IonPage>
            <Header left={left} />
            <IonContent fullscreen className='bg-light ion-padding'>
                <h2 className='mt-0'>{ recipe ? `Modification de la recette ${recipe.Name}` : 'Nouvelle recette' }</h2>
                { submitting ?
                    <div className='flex justify-content-center align-items-center gap-2'>
                        <span className='text-xl'>Création de la recette</span>
                        <IonSpinner />
                    </div>
                : null}
                { error ?
                    <IonText className='text-danger' color='danger'>{error}</IonText>
                : null}
                <div className='flex flex-column gap-3'>
                    <IonInput label='Nom' labelPlacement='floating' type='text' fill='outline' placeholder='Nom' value={name} onIonInput={(e) => setName(e.detail.value ?? '')}/>
                    <IonTextarea ref={t} label="Description" labelPlacement="floating" fill="outline" inputMode='text' value={description} onIonInput={(e) => setDescription(e.target.value ?? '')} onPointerDown={() => t.current?.setFocus()} autoGrow />
                    <IonTextarea label="Ingrédients" labelPlacement="floating" fill="outline" value={ingredients} onIonInput={(e) => setIngredients(e.target.value ?? '')} onPointerDown={() => t.current?.setFocus()} autoGrow />
                    { types ?
                        <IonSelect label="Catégorie" labelPlacement="floating" value={type} onIonChange={(e) => setType(e.detail.value)}>
                            { types.map((t: Record<any, any>, i: number) => (
                                <IonSelectOption key={i} value={t.id}>{t.attributes.Name}</IonSelectOption>
                            )) }
                        </IonSelect>
                    :
                        <Loading text='Chargement des catégories' />
                    }
                </div>
                <IonButton color='success' onClick={() => newRecipe()} className='flex mt-3'>{ recipe ? 'Modifier' : 'Créer' }</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Form;