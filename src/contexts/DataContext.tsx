import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  authorId: string;
  authorName: string;
  upvotes: number;
  rating: number;
  ratingCount: number;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: string;
}

interface DataContextType {
  resources: Resource[];
  categories: string[];
  addResource: (resource: Omit<Resource, 'id' | 'upvotes' | 'rating' | 'ratingCount' | 'comments' | 'createdAt'>) => void;
  addComment: (resourceId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
  upvoteResource: (resourceId: string) => void;
  rateResource: (resourceId: string, rating: number) => void;
  getResourceById: (id: string) => Resource | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};

// Mock initial data
const initialResources: Resource[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'A comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more. Perfect for beginners!',
    category: 'Web Development',
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    authorId: 'demo1',
    authorName: 'Sarah Johnson',
    upvotes: 45,
    rating: 4.8,
    ratingCount: 12,
    comments: [
      {
        id: 'c1',
        userId: 'demo2',
        userName: 'Mike Chen',
        text: 'This tutorial was fantastic, thanks for sharing!',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      }
    ],
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: '2',
    title: 'The Joy of Baking - Essential Techniques',
    description: 'Master fundamental baking techniques from scratch. Includes recipes for bread, pastries, and cakes.',
    category: 'Baking',
    link: 'https://www.joyofbaking.com/',
    authorId: 'demo2',
    authorName: 'Mike Chen',
    upvotes: 32,
    rating: 4.6,
    ratingCount: 8,
    comments: [],
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: '3',
    title: 'Urban Gardening for Beginners',
    description: 'Learn how to grow fresh vegetables and herbs in small spaces. Practical tips for balcony and rooftop gardens.',
    category: 'Gardening',
    link: 'https://www.urbangardenersrepublic.com/',
    authorId: 'demo3',
    authorName: 'Emma Rodriguez',
    upvotes: 28,
    rating: 4.9,
    ratingCount: 15,
    comments: [],
    createdAt: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: '4',
    title: 'Introduction to 3D Printing',
    description: 'Everything you need to know to start 3D printing. From choosing a printer to your first successful print.',
    category: '3D Printing',
    link: 'https://www.prusa3d.com/learn/',
    authorId: 'demo1',
    authorName: 'Sarah Johnson',
    upvotes: 51,
    rating: 4.7,
    ratingCount: 20,
    comments: [
      {
        id: 'c2',
        userId: 'demo3',
        userName: 'Emma Rodriguez',
        text: 'Very helpful for getting started!',
        createdAt: new Date(Date.now() - 172800000).toISOString(),
      }
    ],
    createdAt: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: '5',
    title: 'Digital Art with Procreate',
    description: 'Complete guide to digital illustration using Procreate on iPad. Includes brushes and tutorials.',
    category: 'Digital Art',
    link: 'https://procreate.art/handbook',
    authorId: 'demo4',
    authorName: 'Alex Kim',
    upvotes: 67,
    rating: 4.9,
    ratingCount: 25,
    comments: [],
    createdAt: new Date(Date.now() - 518400000).toISOString(),
  },
  {
    id: '6',
    title: 'ChatGPT for Creative Writing',
    description: 'Learn how to use AI as a creative partner for brainstorming, character development, and plot generation.',
    category: 'AI Tools',
    link: 'https://chat.openai.com/',
    authorId: 'demo5',
    authorName: 'Jordan Lee',
    upvotes: 89,
    rating: 4.5,
    ratingCount: 30,
    comments: [
      {
        id: 'c3',
        userId: 'demo1',
        userName: 'Sarah Johnson',
        text: 'Game-changer for overcoming writer\'s block!',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      }
    ],
    createdAt: new Date(Date.now() - 604800000).toISOString(),
  },
  {
    id: '7',
    title: 'Midjourney AI Art Generation',
    description: 'Create stunning visual art using AI. Perfect for concept art, illustrations, and design inspiration.',
    category: 'AI Tools',
    link: 'https://www.midjourney.com/',
    authorId: 'demo4',
    authorName: 'Alex Kim',
    upvotes: 102,
    rating: 4.8,
    ratingCount: 45,
    comments: [],
    createdAt: new Date(Date.now() - 691200000).toISOString(),
  },
  {
    id: '8',
    title: 'GitHub Copilot - AI Code Assistant',
    description: 'Accelerate your coding with AI-powered code suggestions. Supports multiple programming languages.',
    category: 'AI Tools',
    link: 'https://github.com/features/copilot',
    authorId: 'demo1',
    authorName: 'Sarah Johnson',
    upvotes: 78,
    rating: 4.6,
    ratingCount: 35,
    comments: [],
    createdAt: new Date(Date.now() - 777600000).toISOString(),
  },
  {
    id: '9',
    title: 'Music Theory Fundamentals',
    description: 'Comprehensive guide to understanding music theory. Essential for composers and musicians.',
    category: 'Music',
    link: 'https://www.musictheory.net/',
    authorId: 'demo6',
    authorName: 'Taylor Brown',
    upvotes: 41,
    rating: 4.7,
    ratingCount: 18,
    comments: [],
    createdAt: new Date(Date.now() - 864000000).toISOString(),
  },
  {
    id: '10',
    title: 'Photography Composition Guide',
    description: 'Master the art of composition in photography. Techniques used by professional photographers.',
    category: 'Photography',
    link: 'https://www.digital-photography-school.com/',
    authorId: 'demo3',
    authorName: 'Emma Rodriguez',
    upvotes: 55,
    rating: 4.8,
    ratingCount: 22,
    comments: [],
    createdAt: new Date(Date.now() - 950400000).toISOString(),
  },
];

export const categories = [
  'Web Development',
  'Baking',
  'Gardening',
  '3D Printing',
  'Digital Art',
  'AI Tools',
  'Music',
  'Photography',
  'Writing',
  'Fitness',
  'Cooking',
  'Woodworking',
  'Knitting',
  'Gaming',
  'Languages',
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // Load resources from localStorage or use initial data
    const stored = localStorage.getItem('resources');
    if (stored) {
      setResources(JSON.parse(stored));
    } else {
      setResources(initialResources);
      localStorage.setItem('resources', JSON.stringify(initialResources));
    }
  }, []);

  const addResource = (resource: Omit<Resource, 'id' | 'upvotes' | 'rating' | 'ratingCount' | 'comments' | 'createdAt'>) => {
    const newResource: Resource = {
      ...resource,
      id: Date.now().toString(),
      upvotes: 0,
      rating: 0,
      ratingCount: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    const updated = [...resources, newResource];
    setResources(updated);
    localStorage.setItem('resources', JSON.stringify(updated));
  };

  const addComment = (resourceId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    const updated = resources.map(r =>
      r.id === resourceId
        ? { ...r, comments: [...r.comments, newComment] }
        : r
    );
    setResources(updated);
    localStorage.setItem('resources', JSON.stringify(updated));
  };

  const upvoteResource = (resourceId: string) => {
    const updated = resources.map(r =>
      r.id === resourceId
        ? { ...r, upvotes: r.upvotes + 1 }
        : r
    );
    setResources(updated);
    localStorage.setItem('resources', JSON.stringify(updated));
  };

  const rateResource = (resourceId: string, rating: number) => {
    const updated = resources.map(r => {
      if (r.id === resourceId) {
        const newRatingCount = r.ratingCount + 1;
        const newRating = ((r.rating * r.ratingCount) + rating) / newRatingCount;
        return { ...r, rating: newRating, ratingCount: newRatingCount };
      }
      return r;
    });
    setResources(updated);
    localStorage.setItem('resources', JSON.stringify(updated));
  };

  const getResourceById = (id: string) => {
    return resources.find(r => r.id === id);
  };

  return (
    <DataContext.Provider
      value={{
        resources,
        categories,
        addResource,
        addComment,
        upvoteResource,
        rateResource,
        getResourceById,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
