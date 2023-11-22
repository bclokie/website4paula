// Publications.js

import React from 'react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      title: 'Integrating Behavioral Science and Design Thinking to Develop Mobile Health Interventions: Systematic Scoping Review',
      authors: 'Voorheis P, Zhao A, Kuluski K, Pham Q, Scott T, Sztur P, Khanna N, Ibrahim M, Petch J',
      journal: 'JMIR mHealth & uHealth',
      year: 2022,
      doi: 'https://doi.org/10.2196/35799',
    },
    {
      title: 'Making Sense of Theories, Models, and Frameworks in Digital Health Behavior Change Design: Qualitative Descriptive Study',
      authors: 'Voorheis P, Bhuiya AR, Kuluski K, Pham Q, Petch J',
      journal: 'Journal of Medical Internet Research',
      year: 2023,
      doi: 'https://doi.org/10.2196/45095',
    },
    {
      title: 'Maximizing the value of patient and public involvement in the digital health co-design process: A qualitative study with design leaders and patient-public partners',
      authors: 'Voorheis P, Kuluski K, Pham Q, Petch J',
      journal: 'PLOS Digital Health',
      year: 2023,
      doi: 'https://doi.org/10.1371/journal.pdig.0000213',
    },
    {
      title: 'Understanding and Supporting Active Travel in Older Adults using Behavioural Science: Systematic Scoping Review and Strategic Behavioural Analysis',
      authors: 'Voorheis P, Hasnain SM, Silver M, Aitken I, Widener M',
      journal: 'Journal of Transport & Health',
      year: 2023,
      doi: 'https://doi.org/10.1016/j.jth.2023.101602',
    },
    {
      title: 'Adaptation to life after sport for retired athletes: A scoping review of existing reviews and programs',
      authors: 'Voorheis P, M Silver, Consonni J',
      journal: 'PLOS One',
      year: 2023,
      doi: 'https://doi.org/10.1371/journal.pone.0291683',
    },
  ];

  return (
    <div className="my-work-container">
      <div className="work-title-container">
        <h2 className="work-title">Published Works</h2>
        <div className="header-line"></div>
        <p className="subtitle">
          My key publications are listed below. For a full list of my publications, please refer to{' '}
          <a href="https://scholar.google.ca/citations?hl=en&user=X5tw-kEAAAAJ&view_op=list_works&gmla=AJ1KiT1Wnnb5ARgiGLnOWFW1hoyDwPLSMEx-70qeAXjjVL0l4KyrzsxuqFp1r-MxtbkASbS-a6tcQ5DBCHJEz4Jw" target="_blank" rel="noopener noreferrer" className="blue-link">
            Google Scholar
          </a>.
        </p>
      </div>
      <ul className="works-list">
        {publications.map((publication, index) => (
          <li key={index} className="work-item">
            <h3>{publication.title}</h3>
            <p>{publication.authors}</p>
            <p>{publication.journal}, {publication.year}</p>
            <a href={publication.doi} target="_blank" rel="noopener noreferrer">
              View Work
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
