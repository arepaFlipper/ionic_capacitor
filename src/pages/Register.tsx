import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDone, checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';

const Register = () => {
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log('Creating account...');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
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
