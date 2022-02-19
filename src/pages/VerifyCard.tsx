import React, { ReactElement } from "react";
import { IonContent, IonHeader, IonToolbar, IonPage, IonButtons, IonBackButton } from "@ionic/react";
import QR from "../qrCode.svg";

interface Props {}

export default function verifyCard({}: Props): ReactElement {
  const dateNow = new Date();
  const switchMonth = 10;

  const styles = {
    qrWrapper: {
      padding: "0.5rem",
    },
    qrBackground: {
      backgroundColor: "white",
      padding: "0.5rem 0.5rem 0.25rem 0.5rem",
    },
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/card" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="secondary">
        <div className="container p-2">
          <div className="border border-rounded" style={styles.qrWrapper}>
            <div className="border-rounded" style={styles.qrBackground}>
              <img src={QR} alt="qr code" />
            </div>
          </div>
          <h1 className="text-center text-30 text-bold">
            {dateNow.getMonth() < switchMonth ? dateNow.getFullYear() - 1 : dateNow.getFullYear()}
            {" - "}
            {dateNow.getMonth() < switchMonth ? dateNow.getFullYear() : dateNow.getFullYear() + 1}
          </h1>
          <p className="text-center text-10 color-lightgrey">
            Voimassa 30.09.
            {dateNow.getMonth() < switchMonth ? dateNow.getFullYear() : dateNow.getFullYear() + 1} asti
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}
