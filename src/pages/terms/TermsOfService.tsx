import React, { useEffect, useState } from 'react';
import './App.css';
import { Footer } from '../../components/footer/Footer.style';

interface Chapter {
  title: string;
  content: (string | Table)[];
}

interface Table {
  table: {
    columns: string[];
    rows: string[][];
  };
}

const TermsOfService: React.FC = () => {
  const [data, setData] = useState<{ policy_title: string; chapters: Chapter[] } | null>(null);

  useEffect(() => {
    fetch('/terms_of_service.json')
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main">
        <h1 className='h1'>{data.policy_title}</h1>
        <div className='content'>
        {data.chapters.map((chapter, index) => (
          <div key={index}>
            <h2 className='h2'>{chapter.title}</h2>
            {chapter.content.map((item, contentIndex) => {
              if (typeof item === 'string') {
                return <p key={contentIndex}>{item}</p>;
              } else if ('table' in item) {
                return (
                  <table key={contentIndex}>
                    <thead>
                      <tr>
                        {item.table.columns.map((column, columnIndex) => (
                          <th key={columnIndex}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              }
              return null;
            })}
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
