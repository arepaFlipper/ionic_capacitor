import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
type Props = {}

const Register = (props: Props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI for Register goes here...</IonContent>
    </IonPage >
  );

}

export default Register;
