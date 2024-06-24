import { useState } from "react";
import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Home.css';
import { trashBinOutline } from "ionicons/icons";

type TUser = {
  name: {
    first: string;
    last: string;
  },
  email: string;
  gender: string;
  location: {
    city: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    state: string;
    postcode: number;
    country: string;
    street: { number: number, name: string };
    timezone: {
      offset: string;
      description: string;
    }
  }
  cell: string;
  login: {
    username: string;
    uuid: string;
    password: string;
  },
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  },
  registered: {
    date: string;
    age: number;
  },
  dob: {
    date: string;
    age: number;
  },
  nat: string;
  phone: string;
};

const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<TUser[]>([]);

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
    return users.results;
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
      <IonContent className="ion-padding">
        {(users.length > 0) && users.map((user: TUser, idx: number) => {
          console.log(`📐%cList.tsx:46 - user`, 'font-weight:bold; background:#916e00;color:#fff;'); //DELETEME:
          console.log(user); // DELETEME:
          return (
            <IonCard key={idx}>
              <IonCardContent>
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonImg src={user.picture.large} />
                  </IonAvatar>
                  <IonLabel>
                    {`${user.name.first} ${user.name.last}`}
                    <p>{user.email}</p>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default List;
