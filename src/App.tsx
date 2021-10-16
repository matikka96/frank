import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  compassOutline,
  menuOutline,
  idCardOutline,
  starOutline,
  pricetagOutline,
} from "ionicons/icons";
import StudentCard from "./pages/StudentCard";
import Profile from "./pages/Profile";
import useProfile from "./hooks/useProfile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/global.css";
import ProfileType from "./types/profile";

export default function App() {
  const [profile, setProfile] = useProfile();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/student-card">
              <StudentCard profile={profile} />
            </Route>
            <Route path="/profile">
              <Profile profile={profile} setProfile={setProfile} />
            </Route>
            <Route exact path="/">
              <Redirect to="/student-card" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton disabled={true}>
              <IonIcon icon={compassOutline} />
            </IonTabButton>
            <IonTabButton tab="student-card" href="/student-card">
              <IonIcon icon={idCardOutline} />
            </IonTabButton>
            <IonTabButton disabled={true}>
              <IonIcon icon={pricetagOutline} />
            </IonTabButton>
            <IonTabButton disabled={true}>
              <IonIcon icon={starOutline} />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={menuOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
