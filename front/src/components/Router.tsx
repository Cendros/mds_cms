import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import { add, homeOutline } from 'ionicons/icons';
import New from "../pages/New";
import { BrowserRouter, Link } from "react-router-dom";

const Router: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <BrowserRouter basename="/" />
                    <Link to='/home' />
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/new" render={() => <New />} />
                    <Route path="/">
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