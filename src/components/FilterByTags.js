import React from 'react';

const FilterByTags = ({value, onChooseTag, createTagsArr}) =>
  <ul className="tag-list">
    {
      createTagsArr().map((item,index) =>
      <li className="tag-item" key={index} onClick={(event) => onChooseTag(event)}>
        {item}
      </li>
      )}
  </ul>


export default FilterByTags;
