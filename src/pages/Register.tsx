import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDone, checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';

const Register = () => {
  const router = useIonRouter();
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log(`🍊%cRegister.tsx:9 - Creating account...`, 'font-weight:bold; background:#2fd000;color:#fff;'); //DELETEME:
    console.log('Creating account...');
    router.goBack();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doRegister}>
              <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="crizy182@gmail.com"></IonInput>
              <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="crizy182@gmail.com"></IonInput>
              <IonButton className="ion-margin-top" type="submit" expand="full" >
                Create my Account
                <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage >
  );

}

export default Register;
