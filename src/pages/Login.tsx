import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonCard, IonCardContent, IonInput, IonButton } from '@ionic/react';
type Props = {}

const Login = (props: Props) => {
  const doLogin = (event: any) => {
    event.preventDefault();
    console.log('Logging in...');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonTitle>Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
              <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="crizy182@gmail.com"></IonInput>
              <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="crizy182@gmail.com"></IonInput>
              <IonButton className="ion-margin-top" type="submit" expand="full" >
                Login
              </IonButton>
              <IonButton routerLink="/register" color={"secondary"} className="ion-margin-top" type="button" expand="full" >
                Create Account
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage >
  );

}

export default Login;
