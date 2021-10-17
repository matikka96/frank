import React, { ReactElement } from "react";
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonDatetime,
  IonAvatar,
  IonListHeader,
  IonIcon,
} from "@ionic/react";
import { cloudUploadOutline } from "ionicons/icons";
import "./Profile.css";

interface Props {
  profile: any;
  setProfile: (newProfile: any) => void;
}

export default function Profile({ profile, setProfile }: Props): ReactElement {
  const updateProfile = (key: string, value: string | number) => {
    const updatedProfile = JSON.parse(JSON.stringify(profile));
    updatedProfile[key] = value;
    setProfile(updatedProfile);
  };

  const loadPicture = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        const uploadedPicture = reader.result?.toString();
        if (uploadedPicture) updateProfile("picture", uploadedPicture);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Profiili</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label>
            <IonAvatar
              slot="center"
              className="m-2 bg-grey"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {profile.picture ? (
                <img src={profile.picture} />
              ) : (
                <IonIcon size="large" icon={cloudUploadOutline} />
              )}
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => loadPicture(e)}
              />
            </IonAvatar>
          </label>
        </div>

        <IonList>
          <IonListHeader>
            <IonLabel>Opiskelijan tiedot</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel position="stacked">Etunimi</IonLabel>
            <IonInput
              placeholder="Matti"
              value={profile.firstName}
              onIonChange={(e) => updateProfile("firstName", e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Sukunimi</IonLabel>
            <IonInput
              placeholder="Meikäläinen"
              value={profile.lastName}
              onIonChange={(e) => updateProfile("lastName", e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Syntymäpäivä</IonLabel>
            <IonDatetime
              placeholder="1990 01 01"
              displayFormat="YYYY MM DD"
              min={(new Date().getFullYear() - 80).toString()}
              max={(new Date().getFullYear() - 15).toString()}
              value={profile.birthDate}
              onIonChange={(e) =>
                updateProfile("birthDate", e.detail.value!.split("T")[0])
              }></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Opiskelijanumero</IonLabel>
            <IonInput
              placeholder="1000000"
              type="number"
              value={profile.studentNumber}
              onIonChange={(e) => updateProfile("studentNumber", e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Yliopisto</IonLabel>
            <IonInput
              placeholder="LUT-Yliopisto"
              value={profile.university}
              onIonChange={(e) => updateProfile("university", e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
