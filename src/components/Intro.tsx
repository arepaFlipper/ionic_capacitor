import { IonButton, IonText } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro2Svg from '../assets/intro/2.svg';
import Intro3Svg from '../assets/intro/3.svg';
import logo from '../assets/assignar.svg';
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
          <h1>The Operations Platform that keeps construction projects moving</h1>
          <h3>Don't let manual processes slow you down. Easily track operations from start to finish and do more with what you have.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={logo} alt="Intro 2" />
        <video src="blob:https://www.assignar.com/ed85f246-85cb-494f-ac5f-50ffa1461500" autoPlay muted loop />
        <IonText>
          <h1>Everything you need in one place</h1>
          <h3>Take on more work with fewer headaches using a schefuling and time-tracking solution that improves communication between the offece and the field.</h3>
        </IonText>
        <div>
          <SwiperButtonNext>Next</SwiperButtonNext>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText>
          <h1>Work Smarter</h1>
          <h3>Plan, schedule, and deploy crews and equipment all from one place. Send jobsite info directly to the office. Gain greater visibility into your operations so you can improve productivity, increase profits, and build more.</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
