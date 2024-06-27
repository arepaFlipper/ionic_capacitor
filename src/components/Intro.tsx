import { IonButton, IonText } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro2Svg from '../assets/intro/2.svg';
import Intro3Svg from '../assets/intro/3.svg';
import './Intro.css';

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton className="btn btn-primary" onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={`https://assignar-jbd.s3.us-west-1.amazonaws.com/2023_07-Assignar-Hero_v2_NEW+BLUE+BACKGROUND.gif`} alt="Intro 1" />
        <IonText>
          <h1>Self-Guided Tour</h1>
          <h3>Explore the basics of the easy-to-use but robust Assignar platform.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText>
          <h3>Create powerful native apps with Capacitor.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText>
          <h3>Enjoy learning to code!</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
