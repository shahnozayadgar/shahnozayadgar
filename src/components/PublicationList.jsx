import React from 'react';
import PublicationItem from './PublicationItem';

const PublicationList = () => {
  // Example data (replace with your own)
  const publications = [
    {
      title:
        'Something',
      authors: 'Something',
      venue: 'IUI 2024',
      year: '2024',
      imageSrc: '/images/iui2024.png', // optional
      links: [
        { label: 'PDF', url: 'https://arxiv.org/...' },
        { label: 'ACM DL', url: 'https://dl.acm.org/...' },
        { label: 'arXiv', url: 'https://arxiv.org/...' },
        { label: 'Project Page', url: '#' },
      ],
    },
    {
      title:
        'Dummy',
      authors: 'Dummy',
      venue: 'IMWUT 2023',
      year: '2023',
      imageSrc: '/images/imwut2023.png',
      links: [
        { label: 'PDF', url: 'https://arxiv.org/...' },
        { label: 'ACM DL', url: 'https://dl.acm.org/...' },
        { label: 'Video', url: '#' },
      ],
    },
  ];

  return (
    <div className="publication-list">
      <h2>Publications</h2>
      <h3>Conference Papers</h3>
      {publications.map((pub, index) => (
        <PublicationItem
          key={index}
          title={pub.title}
          authors={pub.authors}
          venue={pub.venue}
          year={pub.year}
          links={pub.links}
          imageSrc={pub.imageSrc}
        />
      ))}
    </div>
  );
};

export default PublicationList;