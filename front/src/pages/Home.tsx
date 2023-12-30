import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import useHome from '../hooks/useHome';
import Carousel from '../components/Carousel';
import AllRecipies from '../components/AllRecipies';

const Home: React.FC = () => {

    const {home, error} = useHome();

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding px-5'>
                { error ?
                    null
                :
                    <>
                        { home?.Carousel ?
                            <Carousel data={home.Carousel} />
                        : <Loading text='Chargement' /> }
                    </>
                }
                <AllRecipies />
            </IonContent>
        </IonPage>
    );
};

export default Home;
