import { StaticImageData } from 'next/image';
import user_1 from '@/assets/images/media/img_08.jpg';
import user_2 from '@/assets/images/media/img_09.jpg';
import user_3 from '@/assets/images/media/img_14.jpg';
import user_4 from '@/assets/images/media/img_15.jpg';

// testimonial type 
type ITestimonial = {
  id: number;
  user?: StaticImageData;
  name: string;
  location: string;
  desc: string;
  rating:number;
}

export const feed_back_two:ITestimonial[] = [
  {
    id:1,
    user:user_1,
    name:'Mr. Rajesh Kumar',
    location:'CEO, GreenTech Innovations',
    desc:`As cities evolve, there is an increasing need for outdoor spaces that are not only functional but also sustainable. Envinova's solar-powered solutions are the perfect answer, combining smart design with renewable energy to create public spaces that enhance both convenience and environmental impact`,
    rating:5
  },
  {
    id:2,
    user:user_2,
    name:'Mr. Pawandeep Singh Anand',
    location:' MD, ALP Nishikawa',
    desc:`With the rise in mobile device usage, providing charging stations in outdoor spaces is no longer optional. Envinova's solar huts are the ideal solution, offering a sustainable way to power up while making a significant contribution to green energy.`,
    rating:4
  },
  {
    id:3,
    user:user_1,
    name:'Prof. YP Verma',
    location:'Registrar, Panjab University',
    desc:'I have had the pleasure of using and observing this product, and I can confidently say that it has the potential to revolutionize the industry.',
    rating:5
  },
  {
    id:4,
    user:user_2,
    name:'Hans-Jörg Hörtnagl',
    location:'Trade Commissioner, Advantage Austria',
    desc:`It's a step forward to create smart cities and enhance public comfort.`,
    rating:4
  },
]

// feedback one start
export const feedback_one = [
  {
    id:1,
    user:user_1,
    name:'Dr. Kiran Malhotra',
    location:'FootCare Clinic',
    desc:`"PiStarTech's FlePS Mat has revolutionized how I diagnose foot issues. The detailed pressure data leads to better, faster treatment decisions."`
  },
  {
    id:2,
    user:user_1,
    name:'Dr. Amit Verma',
    location:'Gait & Mobility Center',
    desc:`"The FlePS Mat is incredibly accurate and easy to use. It's become an essential tool in my practice for assessing foot function."`
  },
  {
    id:3,
    user:user_1,
    name:'Dr. Neha Kapoor',
    location:'Peak Performance Clinic',
    desc:`"With the FlePS Mat, I can quickly evaluate athletes' foot pressure patterns, helping to prevent injuries and optimize performance."`
  }
]
// feedback one end

// feedback three
export const feedback_three:{id: number;desc: string}[] = [
  {
    id:1,
    desc:'Quick solutions coupled with extraordinary performance—a recommendation thats unequivocal.'
  },
  {
    id:2,
    desc:'We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform.'
  },
  {
    id:3,
    desc:'Babun Solutions has truly been a game changer for our business. Their expertise in developing our mobile app'
  },
]

// feedback four 
export const feedback_four:ITestimonial[] = [
  {
    id:1,
    desc:'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    name:'John Smith',
    location:'Claifornia',
    user:user_1,
    rating:5
  },
  {
    id:2,
    desc:'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    name:'Zephyrlyn',
    location:'Valeria',
    user:user_3,
    rating:4
  },
  {
    id:3,
    desc:'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    name:'Quinvera',
    location:'Aqualuna',
    user:user_4,
    rating:4.5
  },
]

// feedback five 
export const feedback_five:ITestimonial[] = [
  {
    id:1,
    desc:`"Extraordinary performance!  Quick solutions. Highly recommended."`,
    name:'James Bond.',
    location:'CEO & Head of Sky Tech Inc.',
    rating:5
  },
  {
    id:2,
    desc:`"Babun Solutions has truly been a game changer for our business."`,
    name:'John Smith',
    location:'CEO & Head of Sky Tech Inc.',
    rating:4
  },
  {
    id:3,
    desc:`"Quick solutions coupled with extraordinary performance—a recommendation."`,
    name:'Mark John',
    location:'CEO & Head of Sky Tech Inc.',
    rating:4.5
  }
]

// feedback six 
export const feedback_six:ITestimonial[] = [
  {
    id:1,
    desc:"Having a home based business is  wonderful asset to your life. The problem still stands comes time your business. Quis lorem elite.",
    name:'James Bond.',
    location:'Moscow, Russia',
    rating:5
  },
  {
    id:2,
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sed nobis eveniet nisi provident aut excepturi reiciendis tuo.",
    name:'John Smith',
    location:'Cairo, Egypt',
    rating:4
  },
  {
    id:3,
    desc:"Efficient problem-solving, insightful market analysis, and actionable plans made the consulting experience business's success.",
    name:'Jesica Harris',
    location:'Tokyo, Japan',
    rating:4.5
  }
]