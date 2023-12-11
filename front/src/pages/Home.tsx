import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import useHome from '../hooks/useHome';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {

    const home = useHome();
    console.log(home);

    if (!home)
        return <Loading text='Chargement' />

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding px-5'>
                { home.Carousel ?
                    <Carousel data={home.Carousel} />
                : null }
            </IonContent>
        </IonPage>
    );
};

export default Home;
