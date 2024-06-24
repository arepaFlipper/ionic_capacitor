import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Tab2: React.FC = () => {
  const containerRef = "Home Sweet home";
  console.log(`🛫%cHome.tsx:7 - containerRef`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME:
  console.log(containerRef); // DELETEME:
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Tab 1 UI
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
