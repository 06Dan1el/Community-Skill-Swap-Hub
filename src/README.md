# Community Skill Swap Hub

A community-driven platform where passionate learners share knowledge, resources, and experiences to help each other grow. Users can create profiles, share resources about their hobbies and skills, and discover curated content from like-minded individuals.

## 🚀 Features

### User Management
- **User Registration & Authentication**: Sign up and login with email and password (mock authentication using localStorage)
- **User Profiles**: Complete profile management with:
  - Full name (mandatory)
  - Email (mandatory)
  - Pronouns (optional)
  - Phone number (optional)
  - Profile photo upload with ability to update/delete
  - Multiple hobbies/skills selection

### Resource Management
- **Browse Resources**: Search and filter resources by category and keywords
- **Post Resources**: Authenticated users can share links to tutorials, tools, articles, and more
- **Resource Details**: Each resource includes:
  - Title, description, category, and external link
  - Author information
  - Upvote system
  - Star rating (1-5 stars)
  - Comments and reviews section

### Navigation & Pages
- **Responsive Navigation**: Mobile-friendly navigation with dropdown menus
- **Homepage**: Hero section with feature highlights and category browsing
- **Browse Resources**: Advanced search and filtering functionality
- **AI Tools Page**: Dedicated section for AI-related resources
- **About Us Page**: Platform mission, values, and how it works
- **Contact Us Page**: Contact form and support information
- **User Profile**: View and edit personal information
- **Post Resource**: Form to add new resources to the platform

### User Interaction
- **Rating System**: 5-star rating for resources
- **Upvote System**: Upvote helpful resources
- **Comment System**: Leave feedback and reviews on resources
- **Guest Browsing**: Non-authenticated users can browse and search resources

## 🛠️ Technologies Used

### Frontend
- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **React Router**: Client-side routing
- **Tailwind CSS v4**: Utility-first CSS framework
- **Lucide React**: Icon library

### State Management
- **React Context API**: For authentication and data management
- **localStorage**: Persistent storage for user data and resources (mock backend)

## 📋 Requirements

- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skill-swap-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📱 Usage

### For New Users

1. **Create an Account**:
   - Click "Sign Up" in the navigation bar
   - Fill in your full name, email, and password (minimum 6 characters)
   - Click "Sign Up" to create your account

2. **Complete Your Profile**:
   - Navigate to "My Profile" from the user menu
   - Click "Edit Profile"
   - Upload a profile photo (optional)
   - Add your pronouns and phone number (optional)
   - Select your hobbies and skills
   - Click "Save Changes"

3. **Share a Resource**:
   - Click "Post Resource" in the navigation
   - Fill in the resource title, category, description, and link
   - Click "Post Resource" to share with the community

4. **Browse and Discover**:
   - Visit "Browse Resources" to explore all resources
   - Use the search bar to find specific topics
   - Filter by category using the dropdown menu
   - Click on any resource to view details, rate, and comment

### For Guest Users

- Browse all resources without creating an account
- Search and filter resources by category
- View resource details and existing ratings/comments
- Sign up required to post resources, rate, or comment

## 🎨 Mock Data

The application includes pre-populated mock data:
- **10 sample resources** across various categories
- **3 demo users** for testing
- Sample comments and ratings

All data is stored in localStorage and persists across sessions.

## 🔐 Authentication

The application uses mock authentication with localStorage:
- Passwords are stored in localStorage (for demo purposes only)
- In production, this should be replaced with a secure backend authentication system
- User sessions persist across browser refreshes

## 📊 Data Structure

### User Object
```typescript
{
  id: string;
  email: string;
  fullName: string;
  pronouns?: string;
  phone?: string;
  photo?: string;
  hobbies: string[];
}
```

### Resource Object
```typescript
{
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
```

## 🌐 Available Categories

- Web Development
- Baking
- Gardening
- 3D Printing
- Digital Art
- AI Tools
- Music
- Photography
- Writing
- Fitness
- Cooking
- Woodworking
- Knitting
- Gaming
- Languages

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔮 Future Enhancements (Back-end Integration)

For the second semester, the following backend features are planned:
- Real database integration (PostgreSQL/MongoDB)
- Secure user authentication (JWT tokens)
- API endpoints for CRUD operations
- File upload service for profile photos
- Real-time notifications
- User-to-user messaging
- Advanced search with Elasticsearch
- Email verification
- Password reset functionality

## 🎓 Technology Stack Recommendations for Back-end

### Recommended Stack
- **Backend Framework**: Node.js with Express.js or NestJS
- **Database**: PostgreSQL (relational data) or MongoDB (flexible schema)
- **ORM**: Prisma (PostgreSQL) or Mongoose (MongoDB)
- **Authentication**: JWT with bcrypt for password hashing
- **File Storage**: AWS S3 or Cloudinary for images
- **API**: RESTful API or GraphQL

### Alternative Stacks
- **Python**: Django or Flask with SQLAlchemy
- **Java**: Spring Boot with Hibernate
- **C#**: ASP.NET Core with Entity Framework

## 📄 License

This project is created for educational purposes as part of a university assessment.

## 👥 Contributing

This is an educational project. Contributions are not currently accepted.

## 🐛 Known Issues

- This is a front-end only implementation with mock data
- Authentication is not secure (uses localStorage)
- File uploads are stored as base64 strings in localStorage (not suitable for production)
- No data validation on the backend (since there is no backend yet)

## 📧 Support

For questions or issues, please use the Contact page within the application.

## ⭐ Acknowledgments

- Icons provided by Lucide React
- Images from Unsplash
- Built with React and Tailwind CSS
