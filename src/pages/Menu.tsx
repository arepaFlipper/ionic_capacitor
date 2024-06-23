import { IonApp, IonContent, IonHeader, IonRouterOutlet, IonTitle } from '@ionic/react';
import './Home.css';
import { IonReactRouter } from '@ionic/react-router';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <IonTitle>Menu</IonTitle>
        </IonRouterOutlet>
      </IonReactRouter>
      <IonContent className="ion-padding">
        <p>Menu</p>
      </IonContent>
    </IonApp>
  );
};

export default Home;
