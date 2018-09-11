import React, {Component} from 'react';
import './App.css';
import list from './components/list';
import Filters from './components/Filters';
import Results from "./components/Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      results: [],
      filterName: '',
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.allResults = this.allResults.bind(this);
    this.createTagsArr = this.createTagsArr.bind(this);
    this.onChooseTag = this.onChooseTag.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  // all result
  allResults() {
    const { list } = this.state;

    const copyList = Object.assign({}, list);

    Array.from(document.getElementsByClassName("tag-item")).forEach(function(item) {
      item.classList.remove('active')
    });
    Array.from(document.getElementsByClassName("filter_tag-title")).forEach(function(item) {
      item.classList.remove('open')
    });

    this.setState({
      results: copyList.results,
      searchTerm: '',
      filterName: 'All results'
    });
  }

  // for change
  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
      filterName: 'Search filter'
    }, this.onCheckChangeHandler);
  }

  onCheckChangeHandler() {
    const {searchTerm} = this.state;
    const copyList = Object.assign({}, list);

    Array.from(document.getElementsByClassName("tag-item")).forEach(function(item) {
      item.classList.remove('active')
    });
    Array.from(document.getElementsByClassName("filter_tag-title")).forEach(function(item) {
      item.classList.remove('open')
    });

    let isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    let resultChange = copyList.results.filter(isSearched(searchTerm));

    this.setState({results: resultChange});
  }

  // for tags
  createTagsArr() {
    let tagsArr = [];
    const copyList = Object.assign({}, list);

    for (let i = 0; i < copyList.results.length; i++) {
      let curResultTag = copyList.results[i].tags;
      tagsArr = tagsArr.concat(...curResultTag)
    }
    let uniqueTags = [...new Set(tagsArr)].sort();
    return uniqueTags;
  }

  onChooseTag(event) {

    const valueTag = event.target.innerHTML;
    const copyList = Object.assign({}, list);

    let isSearched = valueTag => item =>
      item.tags.some(r => r.includes(valueTag));

    if(event.target.className.includes('tag-item')) {
      Array.from(document.getElementsByClassName("tag-item")).forEach(function(item) {
        item.classList.remove('active')
      });
      event.target.classList.add('active');
    }

    let resultTags = copyList.results.filter(isSearched(valueTag));

    this.setState({
      results: resultTags,
      searchTerm: '',
      filterName: 'Tag filter'
    });
  }

  onClickHandler(event){
    if(event.target.className.includes('filter_tag-title')) {
      event.target.classList.toggle("open");
    }
  }


  render() {

    const {searchTerm, filterName, results} = this.state;

    return (
      <div className="App">
        <div className="container main">

          <div className="filter">
            <h3 className="filter__title">Choose filter</h3>
            <Filters
              value={searchTerm}
              onChange={this.onSearchChange}
              allResult={this.allResults}
              createTagsArr={this.createTagsArr}
              onChooseTag={this.onChooseTag}
              onClickHandler={this.onClickHandler}
            />
          </div>

          <div className="results">
            <h3 className="results__title">Results</h3>
            <h4 >Filter type: {filterName !== '' ? filterName : ' '}</h4>
            <Results results={results}/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
