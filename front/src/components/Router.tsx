import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import { add, homeOutline } from 'ionicons/icons';
import New from "../pages/New";

const Router: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/new" render={() => <New />} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="test" href="/">
                        <IonIcon aria-hidden="true" icon={homeOutline} />
                        <IonLabel>Accueil</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="new" href="/new">
                        <IonIcon aria-hidden="true" icon={add} />
                        <IonLabel>Nouvelle recette</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Router;