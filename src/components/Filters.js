import React from 'react';
import FilterByChange from './FilterByChange';
import FilterByTags from './FilterByTags';

const Filters = ({
                   value,
                   onChange,
                   allResult,
                   onChooseTag,
                   createTagsArr,
                   onClickHandler
                 }) =>
  <div className="filter-wrap">
    <button
      className="filter_allrender button"
      type="button"
      onClick={() => allResult()}
    >
      All results
    </button>

    <div className="filter_search">
      <FilterByChange
        value={value}
        onChange={onChange}
      />
    </div>

    <div className="filter_tag">
      <div className="filter_tag-title button" onClick={(event) => onClickHandler(event)}>Choose tag</div>
      <FilterByTags
        onChange={onChange}
        createTagsArr={createTagsArr}
        onChooseTag={onChooseTag}
      />
    </div>
  </div>


export default Filters;
