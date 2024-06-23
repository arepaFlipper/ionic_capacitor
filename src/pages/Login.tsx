import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
type Props = {}

const Login = (props: Props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage >
  );

}

export default Login;
