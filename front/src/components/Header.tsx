import React from 'react';
import { IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'

type HeaderProps = {
    left?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ left }) => {
    return (
        <IonHeader>
            <IonToolbar>
                { left ?
                    <IonButtons slot='start'>
                        { left }
                    </IonButtons>
                : null }
                <IonTitle>Recettes</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;