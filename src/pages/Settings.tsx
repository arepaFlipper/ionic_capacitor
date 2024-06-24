import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Settings: React.FC = () => {
  const containerRef = "Home Sweet home";
  console.log(`🛫%cHome.tsx:7 - containerRef`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME:
  console.log(containerRef); // DELETEME:
  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonToolbar color="secondary">
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        UI goes here...
      </IonContent>
    </IonPage>
  );
};

export default Settings;
