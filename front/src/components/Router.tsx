import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import { add, homeOutline } from 'ionicons/icons';
import New from "../pages/New";

const Router: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                <Route exact path="/home" render={() => <Home />} />
                <Route exact path="/new" render={() => <New />} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
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