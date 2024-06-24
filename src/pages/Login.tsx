import { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonButton, IonIcon, useIonRouter, useIonLoading, IonGrid, IonRow, IonCol } from '@ionic/react';
import { logInOutline, personCircleOutline } from "ionicons/icons";
import FCC from '../assets/fcc.svg';
import Intro from "../components/Intro";
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present('Please wait...');
    setTimeout(async () => {
      dismiss();
      router.push('/app', 'root');
    }, 2000);
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = async () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

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
          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>

              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <img src={FCC} alt="FCC Logo" width={'50%'} />
                  </div>
                </IonCol>
              </IonRow>

              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput mode="md" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="crizy182@gmail.com"></IonInput>
                        <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="crizy182@gmail.com"></IonInput>
                        <IonButton className="ion-margin-top" type="submit" expand="full" >
                          Login
                          <IonIcon icon={logInOutline} slot="end"></IonIcon>
                        </IonButton>
                        <IonButton routerLink="/register" color={"secondary"} className="ion-margin-top" type="button" expand="full" >
                          Create Account
                          <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                        </IonButton>
                        <IonButton onClick={seeIntroAgain} size="small" fill="clear" color={"medium"} className="ion-margin-top" type="button" expand="full" >
                          Watch intro again
                          <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>

            </IonGrid>
          </IonContent>
        </IonPage >
      )}
    </>
  );

}

export default Login;
