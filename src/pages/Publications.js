import React from 'react';
import './PublishedWorks.css';

const PublishedWorks = () => {
  const works = [
    {
      title: 'Title 1',
      authors: 'Author 1, Author 2',
      publicationYear: 2022,
      link: 'https://example.com/work1',
    },
    {
      title: 'Title 2',
      authors: 'Author 3, Author 4',
      publicationYear: 2021,
      link: 'https://example.com/work2',
    },
    // Add more works as needed
  ];

  return (
    <div className="published-works-container">
      <h2 className="works-title">Published Works</h2>
      <ul className="works-list">
        {works.map((work, index) => (
          <li key={index} className="work-item">
            <h3>{work.title}</h3>
            <p>Authors: {work.authors}</p>
            <p>Year: {work.publicationYear}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              View Work
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublishedWorks;
