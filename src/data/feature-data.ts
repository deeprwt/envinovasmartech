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
    title:'Banking',
    desc:'Effortless payments and transfers with our streamlined banking process.',
    page:'home'
  },
  {
    id:2,
    icon:icon_2,
    title:'Earning',
    desc:'Earning potential grows with dedication, innovation, and continuous improvement.',
    page:'home'
  },
  {
    id:3,
    icon:icon_3,
    title:'Expense Track',
    desc:'Empower your budgeting with accurate and intuitive expense tracking',
    page:'home'
  },
  {
    id:4,
    icon:icon_4,
    title:'Savings',
    desc:'Secure your dreams through disciplined savings & prudent investments.',
    page:'home'
  },
  {
    id:5,
    icon:icon_4,
    title:'Savings',
    desc:'Secure your dreams through disciplined savings & prudent investments.',
    page:'home'
  },
  {
    id:6,
    icon:icon_4,
    title:'Savings',
    desc:'Secure your dreams through disciplined savings & prudent investments.',
    page:'home'
  },
  {
    id:7,
    icon:icon_4,
    title:'Savings',
    desc:'Secure your dreams through disciplined savings & prudent investments.',
    page:'home'
  },
  {
    id:8,
    icon:icon_4,
    title:'Savings',
    desc:'Secure your dreams through disciplined savings & prudent investments.',
    page:'home'
  },
  // home End ------------------------------------------------------------------------------------
  // home 2 staring ------------------------------------------------------------------------------------
]

export default feature_data;