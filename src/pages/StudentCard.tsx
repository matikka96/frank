import {
  IonContent,
  IonIcon,
  IonPage,
  IonText,
  IonFabButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonButton,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { barcodeOutline, checkmarkOutline } from "ionicons/icons";
import "./StudentCard.css";

interface Props {
  profile?: any;
}

export default function StudentCard({ profile }: Props) {
  const router = useIonRouter();

  const userInfoIsValid = () => {
    return !(Object.values(profile).includes("") || Object.values(profile).includes(null));
  };

  return (
    <IonPage>
      <IonContent scrollY={true} fullscreen color="secondary">
        {userInfoIsValid() ? (
          <div className="student-card-wrapper px-2">
            <div className="student-card">
              <IonText color="light">
                <h1 className="text-center text-10">OPISKELIJAKORTTI</h1>
              </IonText>
              <div className="student-card-picture" style={{ marginTop: "-1.5rem" }}>
                <img
                  className="p-2"
                  src={profile.picture}
                  style={{
                    height: "calc(100vw - 4rem)",
                    width: "calc(100vw - 4rem)",
                    objectFit: "cover",
                  }}
                  alt="student picture"
                />
                <IonFabButton
                  className="student-card-icon-left"
                  style={{ pointerEvents: "none" }}
                  color="light">
                  <IonIcon size="large" icon={barcodeOutline} />
                </IonFabButton>
                <IonFabButton
                  className="student-card-icon-right pulse"
                  style={{ pointerEvents: "none" }}
                  color="light">
                  <IonIcon size="large" icon={checkmarkOutline} />
                </IonFabButton>
              </div>
              <IonText color="light mb-1">
                <section className="pt-1">
                  <div className="text-15">{profile.firstName}</div>
                  <div className="text-15">{profile.lastName}</div>
                  <div>{profile.birthDate.split("-").join(".")}</div>
                </section>
                <section className="pt-1">
                  <div>{profile.university}</div>
                </section>
                <section className="pt-1">
                  <div>Korkeakouluopiskelija</div>
                </section>
              </IonText>
            </div>
          </div>
        ) : (
          <IonCard>
            <IonCardHeader>
              {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
              <IonCardTitle>Syötä omat tiedot niin opiskelijakorttisi tulee näkyviin</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={() => router.push("/profile")}>Syötä tiedot</IonButton>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
}
