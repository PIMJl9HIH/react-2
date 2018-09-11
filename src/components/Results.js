import React from 'react';

const Results = ({results}) => {

  return (
    <div className="results-wrap">
      {results.map(item =>
        <div className="result-item" key={item.id}>
          <div className="result-title">{item.title}</div>
          <div className="result-tags">
            {item.tags.map((item,index) =>
              <div className="result-tag" key={index}>{item}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}


export default Results;
