import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro1Svg from '../assets/intro/1.svg';
import Intro2Svg from '../assets/intro/2.svg';
import Intro3Svg from '../assets/intro/3.svg';
import "./Intro.css";

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonBack = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <IonButton onClick={() => swiper.slidePrev()}>{children}</IonButton>
  )
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
  )
}



const Intro = ({ onFinish }: ContainerProps) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Intro1Svg} alt="Intro 1" />
        <IonText>
          <h3>Build awesome apps with Ionic UI components!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText>
          <h3>Work in community</h3>
        </IonText>
        <div>
          <SwiperButtonBack>Back</SwiperButtonBack>
          <SwiperButtonNext>Next</SwiperButtonNext>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText>
          <h3>Balance your time</h3>
        </IonText>
        <div>
          <SwiperButtonBack>Back</SwiperButtonBack>
          <IonButton onClick={onFinish}>Get Started</IonButton>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Intro;
