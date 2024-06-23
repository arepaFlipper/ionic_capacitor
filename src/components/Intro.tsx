import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ContainerProps {
  onFinish: () => void;
}

const Intro = ({ onFinish }: ContainerProps) => {
  return (
    <Swiper>
      <SwiperSlide>test</SwiperSlide>
      <SwiperSlide>asd</SwiperSlide>
    </Swiper>
  )
}

export default Intro;
