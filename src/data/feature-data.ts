import { StaticImageData } from 'next/image';
// home 1
import icon_1 from '@/assets/images/icon/icon_23.svg';
import icon_2 from '@/assets/images/icon/icon_24.svg';
import icon_3 from '@/assets/images/icon/icon_25.svg';
import icon_4 from '@/assets/images/icon/icon_26.svg';
// home 2
import icon_5 from '@/assets/images/icon/icon_06.svg';
import icon_6 from '@/assets/images/icon/icon_07.svg';
import icon_7 from '@/assets/images/icon/icon_08.svg';
// home 3
import icon_9 from '@/assets/images/icon/icon_33.svg';
import icon_8 from '@/assets/images/icon/icon_32.svg';
import icon_10 from '@/assets/images/icon/icon_34.svg';
import icon_22 from '@/assets/images/icon/icon_32.png';
import icon_23 from '@/assets/images/icon/icon_33.png';
import icon_24 from '@/assets/images/icon/icon_34.png';
import icon_11 from '@/assets/images/icon/icon_35.svg';
// home 4
import icon_12 from '@/assets/images/icon/icon_40.svg';
import icon_13 from '@/assets/images/icon/icon_41.svg';
import icon_14 from '@/assets/images/icon/icon_42.svg';
// home 5
import icon_15 from '@/assets/images/icon/icon_95.svg';
import icon_16 from '@/assets/images/icon/icon_95.svg';
import icon_17 from '@/assets/images/icon/icon_10.svg';
import icon_18 from '@/assets/images/icon/icon_11.svg';
import icon_20 from '@/assets/images/icon/icon_20.svg';
import icon_21 from '@/assets/images/icon/icon_20.svg';
import icon_25 from '@/assets/images/icon/icon_35.png';
import icon_26 from '@/assets/images/icon/icon_20.png';

// oracle images 
import oracle1 from '@/assets/images/solutions/oracle/1.png';
import oracle2 from '@/assets/images/solutions/oracle/2.png';
import oracle3 from '@/assets/images/solutions/oracle/3.png';
import oracle4 from '@/assets/images/solutions/oracle/4.png';
import oracle5 from '@/assets/images/solutions/oracle/5.png';

//New icons
import icon_101 from '@/assets/images/icon/icon_101.png';
import icon_102 from '@/assets/images/icon/icon_102.png';
import icon_1008 from '@/assets/images/icon/icon_12.png';
import icon_1009 from '@/assets/images/icon/icon_1009.png';
import icon_1010 from '@/assets/images/icon/icon_1010.png';

//OutSystemsIcons
import icon_1021 from '@/assets/images/icon/icon_1021.png';
import icon_1022 from '@/assets/images/icon/icon_1023.png';
import icon_1023 from '@/assets/images/icon/icon_1022.png';
import icon_1024 from '@/assets/images/icon/icon_1024.png';
import icon_1025 from '@/assets/images/icon/icon_1025.png';
import icon_1026 from '@/assets/images/icon/icon_1026.png';



// data type
interface IService {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
    page: string;
}

const feature_data:IService[] = [
  // home Staring ----------------------------------------------------------
  {
    id:1,
    icon:icon_1,
    title:'Safe Charging Ports for Mobile & Laptop',
    desc:'Fast and reliable charging ports.',
    page:'home'
  },
  {
    id:2,
    icon:icon_2,
    title:'Lights',
    desc:'Bright and energy-efficient lighting.',
    page:'home'
  },
  {
    id:3,
    icon:icon_3,
    title:'Wi-Fi',
    desc:'Seamless and high-speed connectivity',
    page:'home'
  },
  {
    id:4,
    icon:icon_4,
    title:'CCTV',
    desc:'Secure and reliable surveillance.',
    page:'home'
  },
  {
    id:5,
    icon:icon_4,
    title:'Digital Screen',
    desc:'Vivid and ultra-clear display',
    page:'home'
  },
  {
    id:6,
    icon:icon_4,
    title:'Billboard',
    desc:' Impactful and eye-catching advertising.',
    page:'home'
  },
  {
    id:7,
    icon:icon_4,
    title:'Audio Speaker',
    desc:'Dynamic and high-quality audio.',
    page:'home'
  },
  {
    id:8,
    icon:icon_4,
    title:'Sitting Area',
    desc:'Comfortable and stylish seating.',
    page:'home'
  },
  {
    id:9,
    icon:icon_4,
    title:'Healthcare Facilities',
    desc:'Advanced care with modern facilities.',
    page:'home'
  },
  {
    id:10,
    icon:icon_4,
    title:'Security SOS',
    desc:'Instant alerts for emergency security',
    page:'home'
  },
  {
    id:11,
    icon:icon_4,
    title:'Vending Zone',
    desc:'Convenient and automated refreshments',
    page:'home'
  },
  {
    id:12,
    icon:icon_4,
    title:'EV Charging',
    desc:'Fast and efficient EV charging',
    page:'home'
  },
  // home End ------------------------------------------------------------------------------------
  // home 2 staring ------------------------------------------------------------------------------------
]

export default feature_data;