import { useRef } from "react";
import { CreateAnimation, createGesture, Gesture, GestureDetail, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';

const Tab2: React.FC = () => {
  const animationRef = useRef<CreateAnimation | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const onMoveHandler = (detail: GestureDetail) => {
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;

    elementRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMoveEnd = (detail: GestureDetail) => {
    elementRef.current!.style.transition = "500ms ease-out";
    elementRef.current!.style.transform = "translate(0px, 0px)";
  };

  const onStartHandler = (detail: GestureDetail) => {
    elementRef.current!.style.transition = "none";

  }

  useIonViewDidEnter(() => {
    // animationRef.current?.animation.play();
    const gesture: Gesture = createGesture({
      threshold: 0,
      el: elementRef.current!,
      gestureName: 'my-gesture',
      onMove: (ev) => onMoveHandler(ev),
      onEnd: (ev) => onMoveEnd(ev),
      onStart: (ev) => onStartHandler(ev)
    });
    gesture.enable();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <CreateAnimation ref={animationRef} duration={2000} iterations={Infinity} delay={1000}
          keyframes={[
            { offset: 0, transform: 'scale(1)', opacity: '1' },
            { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
            { offset: 1, transform: 'scale(1)', opacity: '1' }
          ]}>
          <IonButton expand={"block"} color={'success'} className="ion-margin">
            Like this App?
          </IonButton>
        </CreateAnimation>
        <div ref={elementRef} style={{ height: 50, width: 50, backgroundColor: 'red' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
