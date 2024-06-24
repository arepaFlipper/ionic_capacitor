import { useRef, useState } from "react";
import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSkeletonText, IonTitle, IonToolbar, useIonAlert, useIonToast, useIonViewWillEnter } from '@ionic/react';
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
  const [showAlert] = useIonAlert();
  const [showToast] = useIonToast()
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const modal = useRef<HTMLIonModalElement>(null);

  //@ts-ignore
  useIonViewWillEnter(async () => {
    const users = await getUsers();
    console.log(`♐%cList.tsx:11 - users`, 'font-weight:bold; background:#38c700;color:#fff;'); //DELETEME:
    console.log(users); // DELETEME:
    setUsers(users);
    setLoading(false);
  });

  const clearList = () => {
    showAlert({
      header: 'Confirm',
      message: 'Are you sure you want to clear the list? 🧼 ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Clear',
          handler: () => {
            setUsers([]);
            showToast({
              message: 'List cleared 🗑️',
              duration: 2000,
              color: 'danger'
            })
          }
        },
      ],
    });
  };

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=10");
    const users = await data.json();
    return users.results;
  }

  const doRefresh = async (event: any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
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
        <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {(loading) && ([...Array(10)].map((_: any, idx: number) => {
          return (
            <IonCard key={idx}>
              <IonCardContent className="ion-no-padding">Loading...</IonCardContent>
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonSkeletonText animated></IonSkeletonText>
                </IonAvatar>
                <IonLabel>
                  <IonSkeletonText animated style={{ width: '150px' }} />
                  <p><IonSkeletonText /></p>
                </IonLabel>
                <IonChip slot="end" color={"primary"}></IonChip>
              </IonItem>
            </IonCard>
          )
        }))}
        {(users.length > 0) && users.map((user: TUser, idx: number) => {
          console.log(`📐%cList.tsx:46 - user`, 'font-weight:bold; background:#916e00;color:#fff;'); //DELETEME:
          console.log(user); // DELETEME:
          return (
            <IonCard key={idx} onClick={() => setSelectedUser(user)}>
              <IonCardContent className="ion-no-padding">
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonImg src={user.picture.large} />
                  </IonAvatar>
                  <IonLabel>
                    {`${user.name.first} ${user.name.last}`}
                    <p>{user.email}</p>
                  </IonLabel>
                  <IonChip slot="end" color={"primary"}>{user.nat}</IonChip>
                </IonItem>
              </IonCardContent>
            </IonCard>
          )
        })}
        <IonModal ref={modal} isOpen={selectedUser !== null} onIonModalDidDismiss={() => setSelectedUser(null)}>
          <IonHeader>
            <IonToolbar color={"success"}>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
              </IonButtons>
              <IonTitle>User</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            SHEET
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default List;
