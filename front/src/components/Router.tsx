import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import { homeOutline, personOutline } from 'ionicons/icons';
import { useAtomValue } from "jotai/react";
import { tokenAtom } from "../atoms/globalStorage";
import Login from "../pages/Login";

const Router: React.FC = () => {
    const token = useAtomValue(tokenAtom);

    return (
        <IonReactRouter>
            { token ?
                <IonTabs>
                    <IonRouterOutlet>
                    <Route exact path="/home" render={() => <Home />} />
                    <Route exact path="/">
                        <Redirect to={token ? "/home" : "/login"} />
                    </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon aria-hidden="true" icon={homeOutline} />
                            <IonLabel>Accueil</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            :
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/home" render={() => <Home />} />
                        <Route exact path="/login" render={() => <Login />} />
                        <Route exact path="/">
                            <Redirect to={"/home"} />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon aria-hidden="true" icon={homeOutline} />
                            <IonLabel>Accueil</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="login" href="/login">
                            <IonIcon aria-hidden="true" icon={personOutline} />
                            <IonLabel>Connexion</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
                
            }
        </IonReactRouter>
    )
}

export default Router;