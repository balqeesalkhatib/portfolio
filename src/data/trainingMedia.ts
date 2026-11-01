export interface TrainingMediaItem {
  id: number;
  type: 'image' | 'video';
  category: 'training-moments' | 'students-sketches' | 'ui-designs' | 'behind-the-scenes';
  title: string;
  description: string;
  src: string; // path relative to public folder, e.g., '/image1.jpeg'
  thumbnail?: string; // optional thumbnail for videos
  featured?: boolean;
}

export const trainingMedia: TrainingMediaItem[] = [
  // Example entries – add more as you place files in public and update this array
  {
    id: 1,
    type: 'image',
    category: 'training-moments',
    title: 'Training Session 1',
    description: 'Students attending a lecture.',
    src: '/image1.jpeg',
    featured: true,
  },
  {
    id: 2,
    type: 'image',
    category: 'students-sketches',
    title: 'Sketches',
    description: 'Hand‑drawn wireframes created by learners.',
    src: '/image6.jpeg',
    featured: false,
  },
  {
    id: 3,
    type: 'video',
    category: 'behind-the-scenes',
    title: 'Training Highlights',
    description: 'Short clips from the workshop.',
    src: '/video1.mp4',
    featured: true,
  },
  {
    id: 4,
    type: 'video',
    category: 'behind-the-scenes',
    title: 'Project Demo',
    description: 'Students demo their final projects.',
    src: '/video2.mp4',
    featured: false,
  },
   {
    id: 5,
    type: 'image',
    category: 'behind-the-scenes',
    title: 'Project Demo',
    description: 'Students demo their final projects.',
    src: '/image3.jpeg',
    featured: true,
  },
   {
    id: 6,
    type: 'image',
    category: 'behind-the-scenes',
    title: 'Project Demo',
    description: 'Students demo their final projects.',
    src: '/image5.jpeg',
    featured: false,
  },
   
];
