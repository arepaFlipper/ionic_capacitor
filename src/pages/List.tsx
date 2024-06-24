import { useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Home.css';
import { trashBinOutline } from "ionicons/icons";

const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  useIonViewWillEnter(async () => {
    const users = await getUsers();
    console.log(`♐%cList.tsx:11 - users`, 'font-weight:bold; background:#38c700;color:#fff;'); //DELETEME:
    console.log(users); // DELETEME:
    setUsers(users);
    setLoading(false);
  });

  const clearList = () => { };

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=10");
    const users = await data.json();
    return users;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={clearList}>
              <IonIcon slot="icon-only" icon={trashBinOutline} color={'light'} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color={"success"}>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default List;
