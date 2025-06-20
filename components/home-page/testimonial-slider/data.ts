export interface Testimonial {
  id: number;
  image: string;
}

export interface FloatingProfileData {
  id: number;
  image: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationType?: 'bounce' | 'float' | 'pulse';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/assets/image/testimonial-3.png"
  },
  {
    id: 2,
    image: "/assets/image/testimonial2.png"
  },
  {
    id: 3,
    image: "/assets/image/testimonial3.png"
  },
  {
    id: 4,
    image: "/assets/image/testimonial4.png"
  },
  {
    id: 5,
    image: "/assets/image/testimonial5.png"
  },
  {
    id: 6,
    image: "/assets/image/testimonial-3.png"
  },
  {
    id: 7,
    image: "/assets/image/testimonial2.png"
  },        
  {
    id: 8,
    image: "/assets/image/testimonial3.png"
  },
   {
    id: 9,
    image: "/assets/image/testimonial4.png"
  },
  {
    id: 10,
    image: "/assets/image/testimonial5.png"
  }
];

export const floatingProfiles: FloatingProfileData[] = [
  // Large profiles (80-100px) - matching the largest circles in first image
  { id: 1, image: "/assets/image/avatars/avatar.png", size: 90, position: { top: "8%", left: "5%" }, animationType: 'float' },
  { id: 2, image: "/assets/image/avatars/avatar.png", size: 85, position: { top: "12%", right: "8%" }, animationType: 'bounce' },
  
  // Medium-large profiles (60-75px)
  { id: 3, image: "/assets/image/avatars/avatar.png", size: 70, position: { top: "25%", left: "12%" }, animationType: 'float' },
  { id: 4, image: "/assets/image/avatars/avatar.png", size: 65, position: { top: "30%", right: "15%" }, animationType: 'pulse' },
  { id: 5, image: "/assets/image/avatars/avatar.png", size: 75, position: { top: "45%", left: "3%" }, animationType: 'float' },
  
  // Medium profiles (45-60px)
  { id: 6, image: "/assets/image/avatars/avatar.png", size: 55, position: { top: "50%", right: "5%" }, animationType: 'bounce' },
  { id: 7, image: "/assets/image/avatars/avatar.png", size: 50, position: { top: "65%", left: "8%" }, animationType: 'float' },
  { id: 8, image: "/assets/image/avatars/avatar.png", size: 58, position: { top: "70%", right: "12%" }, animationType: 'pulse' },
  
  // Small profiles (30-45px) - matching the smallest circles in first image
  { id: 9, image: "/assets/image/avatars/avatar.png", size: 40, position: { bottom: "25%", left: "6%" }, animationType: 'float' },
  { id: 10, image: "/assets/image/avatars/avatar.png", size: 35, position: { bottom: "20%", right: "8%" }, animationType: 'bounce' },
  { id: 11, image: "/assets/image/avatars/avatar.png", size: 42, position: { bottom: "15%", left: "15%" }, animationType: 'pulse' },
  { id: 12, image: "/assets/image/avatars/avatar.png", size: 38, position: { bottom: "10%", right: "18%" }, animationType: 'float' },
  
  // Extra small profiles (25-35px) for more variety
  { id: 13, image: "/assets/image/avatars/avatar.png", size: 30, position: { top: "18%", left: "25%" }, animationType: 'bounce' },
  { id: 14, image: "/assets/image/avatars/avatar.png", size: 32, position: { top: "40%", right: "25%" }, animationType: 'float' },
  { id: 15, image: "/assets/image/avatars/avatar.png", size: 28, position: { bottom: "35%", left: "20%" }, animationType: 'pulse' },
]; 