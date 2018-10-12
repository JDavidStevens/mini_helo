import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData} from '../../ducks/reducer';
import magnifyingGlass from '../../assets/search_logo.png';


class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      search: '',
      checked: true,
      posts:[]
    }

    this.handleReset=this.handleReset.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.handleCheck=this.handleCheck.bind(this);
  }

componentDidMount(){
axios.get('/api/user-data')
.then((res)=>{
  this.props.updateUserData(res.data)
  console.log("session",res.data)
})
.catch(()=>{
  this.props.history.push('/')
})

  axios.get(`/api/posts`).then((response=>{
    this.setState({posts: response.data})
  }))
}

  searchInput(value) {
    this.setState({ search: value })
  }

  handleSearch() { 
    axios.get(`/api/posts?checked=${this.state.checked}&search=${this.state.search}`)
  }

  handleReset(){

  }

  handleCheck(){
this.setState({checked:!this.state.checked})
axios.get(`/api/posts?checked=${this.state.checked}`).then((response=>{
  this.setState({posts: response.data})
}))

  }

  render() {
    let postings= this.state.posts.map((element,index)=>{
      return(
        <div>
          <h2>{element.title}</h2>
          <h5>by {element.username}</h5>
          <img src={element.img} alt=''/>
        </div>
      )
    })

    return (
      <div className="Dashboard">
        <input onChange={(e) => this.searchInput(e.target.value)} placeholder="Search by Title" />
        <button onClick={this.handleSearch}><img className="glass" src={magnifyingGlass} alt='' /></button>
        <button onClick={this.handleReset}>Reset</button>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>
        <div>
          {postings}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,{updateUserData})(Dashboard);