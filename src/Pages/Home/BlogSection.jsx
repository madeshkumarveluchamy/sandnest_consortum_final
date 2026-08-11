import React from 'react';
import './css/BlogSection.css';

// Importing Images
import studioIcon from '../../assets/studio-icon.png';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

const blogPosts = [
  {
    id: 1,
    title: 'How thoughtful architecture elevates everyday living',
    date: 'Jun 9, 2026',
    location: 'Coimbatore',
    img: blog1,
  },
  {
    id: 2,
    title: 'Why spatial flow matters in residential architecture',
    date: 'Sep 5, 2025',
    location: 'Coimbatore',
    img: blog2,
  },
  {
    id: 3,
    title: 'Sustainable design principles in modern architecture',
    date: 'Feb 11, 2026',
    location: 'Coimbatore',
    img: blog3,
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      {/* HEADER SECTION (3 Columns as per Screenshot) */}
      <div className="blog-header">
        {/* Left Side Tag */}
        <div className="blog-header-left">
          <img src={studioIcon} alt="Studio Icon" className="studio-icon" />
          <span className="blog-tag-title sdes">ARCHITECTURAL INSIGHTS</span>
          <span className="blog-slashes">///</span>
        </div>

        {/* Center Main Title */}
        <div className="blog-header-center">
          <h2 className="tit">
            Design Lived,<br />
            Spaces Perfected
          </h2>
        </div>

        {/* Right Description */}
        <div className="blog-header-right">
          <p className="stit">
            A visual library of interiors brought to life from blueprint to beauty.
          </p>
        </div>
      </div>

      {/* BLOG CARDS GRID */}
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="img-holder">
              <img src={post.img} alt={post.title} />
              <span className="cat-pill sdes">Architecture</span>
            </div>
            <div className="blog-card-content">
              <div className="meta-info sdes">
                {post.date} &bull; {post.location}
              </div>
              <h3 className="stit">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;