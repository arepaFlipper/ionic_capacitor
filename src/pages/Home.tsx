import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  const containerRef = "Home Sweet home";
  console.log(`🛫%cHome.tsx:7 - containerRef`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME:
  console.log(containerRef); // DELETEME:
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>FreeCodeCamp LIVE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
