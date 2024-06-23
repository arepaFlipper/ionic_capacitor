import { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { logInOutline, personCircleOutline } from "ionicons/icons";
import FCC from '../assets/fcc.svg';
import Intro from "../components/Intro";

const Login = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);
  const doLogin = (event: any) => {
    event.preventDefault();
    console.log('Logging in...');
    router.push('/home', 'forward', 'push');
  }

  const finishIntro = async () => {
    console.log(`🧴%cLogin.tsx:17 - introSeen`, 'font-weight:bold; background:#4fb000;color:#fff;'); //DELETEME:
    console.log(introSeen); // DELETEME:
  }
  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"success"}>
              <IonTitle>Demo App</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent scrollY={false}>
            <div className="ion-text-center ion-padding">
              <img src={FCC} alt="FCC Logo" width={'50%'} />
            </div>
            <IonCard>
              <IonCardContent>
                <form onSubmit={doLogin}>
                  <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="crizy182@gmail.com"></IonInput>
                  <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="crizy182@gmail.com"></IonInput>
                  <IonButton className="ion-margin-top" type="submit" expand="full" >
                    Login
                    <IonIcon icon={logInOutline} slot="end"></IonIcon>
                  </IonButton>
                  <IonButton routerLink="/register" color={"secondary"} className="ion-margin-top" type="button" expand="full" >
                    Create Account
                    <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage >
      )}
    </>
  );

}

export default Login;
