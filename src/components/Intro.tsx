import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Intro1Svg from '../assets/intro/1.svg';
import Intro2Svg from '../assets/intro/2.svg';
import Intro3Svg from '../assets/intro/3.svg';

interface ContainerProps {
  onFinish: () => void;
}

const Intro = ({ onFinish }: ContainerProps) => {
  return (
    <Swiper>
      <SwiperSlide> <img src={Intro1Svg} alt="Intro 1" /> </SwiperSlide>
      <SwiperSlide> <img src={Intro2Svg} alt="Intro 2" /> </SwiperSlide>
      <SwiperSlide> <img src={Intro3Svg} alt="Intro 3" /> </SwiperSlide>
    </Swiper>
  )
}

export default Intro;
