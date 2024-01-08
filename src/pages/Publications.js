// Publications.js

import React from 'react';
import './Publications.css';
import { Link } from 'react-router-dom';

const Publications = () => {
  const publications = [
    {
      title: (
        <span>
          <b>Integrating Behavioral Science and Design Thinking to Develop Mobile Health Interventions:</b> Systematic Scoping Review
        </span>
      ),
      authors: (
        <span>
          <b>Voorheis P</b>, Zhao A, Kuluski K, Pham Q, Scott T, Sztur P, Khanna N, Ibrahim M, Petch J
        </span>
      ),
      journal: <i>JMIR mHealth & uHealth</i>,
      year: 2022,
      doi: 'https://doi.org/10.2196/35799',
    },
    {
      title: (
        <span>
          <b>Making Sense of Theories, Models, and Frameworks in Digital Health Behavior Change Design:</b> Qualitative Descriptive Study
        </span>
      ),
      authors: (
        <span>
          <b>Voorheis P</b>, Bhuiya AR, Kuluski K, Pham Q, Petch J
        </span>
      ),
      journal: <i>Journal of Medical Internet Research</i>,
      year: 2023,
      doi: 'https://doi.org/10.2196/45095',
    },
    {
      title: (
        <span>
          <b>Maximizing the value of patient and public involvement in the digital health co-design process:</b> A qualitative study with design leaders and patient-public partners
        </span>
      ),
      authors: (
        <span>
          <b>Voorheis P</b>, Kuluski K, Pham Q, Petch J
        </span>
      ),
      journal: <i>PLOS Digital Health</i>,
      year: 2023,
      doi: 'https://doi.org/10.1371/journal.pdig.0000213',
    },
    {
      title: (
        <span>
          <b>Understanding and Supporting Active Travel in Older Adults using Behavioural Science:</b> Systematic Scoping Review and Strategic Behavioural Analysis
        </span>
      ),
      authors: (
        <span>
          <b>Voorheis P</b>, Hasnain SM, Silver M, Aitken I, Widener M
        </span>
      ),
      journal: <i>Journal of Transport & Health</i>,
      year: 2023,
      doi: 'https://doi.org/10.1016/j.jth.2023.101602',
    },
    {
      title: (
        <span>
          <b>Adaptation to life after sport for retired athletes:</b> A scoping review of existing reviews and programs
        </span>
      ),
      authors: (
        <span>
          <b>Voorheis P</b>, M Silver, Consonni J
        </span>
      ),
      journal: <i>PLOS One</i>,
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
          <li key={index} className="publication">
            <hr className="pub-divider"></hr>
            <h3>{publication.title}</h3>
            <p>{publication.authors}</p>
            <p>{publication.journal}, {publication.year}</p>
            <a href={publication.doi} target="_blank" rel="noopener noreferrer">
              View Work
            </a>
          </li>
        ))}
      </ul>
      <div className="button">
        <Link to="/talks+workshops" className="my-work-button">
          Talks & Workshops
        </Link>
      </div>
      <div className="blank">
        <p>----------------------------------</p>
      </div>
    </div>
  );
};

export default Publications;
