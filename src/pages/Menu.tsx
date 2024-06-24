import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';

type TPath = { name: string, url: string, icon: string }

const Menu: React.FC = () => {
  const paths: TPath[] = [
    { name: "Home", url: "/app/list", icon: homeOutline },
    { name: "Settings", url: "/app/settings", icon: newspaperOutline },
  ]
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"secondary"}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent >
            {paths.map((item: TPath, index: number) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem detail={false} routerLink={item.url} routerDirection="none">
                    <IonIcon slot="start" icon={item.icon} />
                    <IonLabel>{item.name}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              )
            })}
            <IonMenuToggle autoHide={false}>
              <IonButton expand="full" routerLink='/' routerDirection="root">
                <IonIcon slot="start" icon={logOutOutline} />
                <IonLabel>Logout</IonLabel>
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route exact path="/app/settings" component={Settings} />
          <Route exact path="/app"> <Redirect to="/app/list" /> </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
