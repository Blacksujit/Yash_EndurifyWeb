import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { CardContainer } from '../Projects/ProjectsStyle';
import Imgh from './img.jpeg'

const BlogContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`;

const BlogWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
`;

const BlogTitle = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const BlogCard = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostImg = styled.img`
  max-width: 20rem;
  height: 18rem;
  padding: 2rem;
`;

const PostTitle = styled.h2`
  font-size: 20px;
  color: black;
`;

const PostSummary = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Blogs() {
  const posts = [
    { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLK4GOkJfK0-ekao6_m3qJCFbjgoE4yYTsrqWbBEnRh9o3vXQiCX70xVU2ivZ0-mOXEU&usqp=CAU", title: "Best Security Practices for Web Developers", summary: "Understand the critical importance of security in web development and the common threats" },
    { id: 2, img: "https://novatura.co/_astro/frame-3.R60pp0U9.png", title: "Enhancing User Experience with (PWAs)", summary: "Explore the features of PWAs, such as offline capabilities, push notifications, and home screen installation." },
    { id: 3, img: "https://i.imghippo.com/files/ZPMDG1717657206.jpg", title: " My Journey from Non-tech to Tech", summary: "This journey, filled with continuous learning and real-world application, has been incredibly rewarding." },

    { id: 4, img: "https://www.urvam.com/storage/blog/829778941702012364.png", title: "Optimizing Website Performance", summary: "Techniques for optimizing website speed and scalability, including image compression, (CDNs), caching strategies, and server-side optimizations." },
    { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSSu3uLW0lmdwU0CCudc5Vmz3T1hyH4hkCKn5oiCggA&s", title: "Responsive Web Design", summary: "Discover the principles and techniques behind responsive web design, including fluid grids, flexible images, and media queries. " },
    { id: 6, img: "https://iabac.org/blog/uploads/images/202309/image_870x_650ece21df858.jpg", title: "The Role of DevOps", summary: " DevOps include infrastructure as code (IaC), continuous integration/continuous delivery (CI/CD), automated testing, and monitoring." },
  ];

  return (
    <BlogContainer id='blogs'>
      <BlogWrapper>
        <BlogTitle>Blogs</BlogTitle>
        <Desc>Feel free to checkout my blogs! Browse through for interesting reads. Stay updated with the latest insights!</Desc>
        <CardContainer>
        {posts.map(post => (
          <BlogCard key={post.id}>
            <PostImg src={post.img} alt="Blog Post Image"/>
            <PostTitle>{post.title}</PostTitle>
            <PostSummary>{post.summary}</PostSummary>
            <ReadMoreLink to={`/blog/${post.id}`}>Read More</ReadMoreLink>
          </BlogCard>
        ))}
        </CardContainer>
      </BlogWrapper>
    </BlogContainer>
  );
}

export default Blogs;
