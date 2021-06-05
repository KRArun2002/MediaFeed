import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { increaseLike } from '../../store/actions/likeActions'  


class ProjectLikes extends Component {
    state = {
      like: 0,
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
      this.props.increaseLike(this.props);
    }
    render() {
        const { project } = this.props;
      return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <button>Like</button>
            </form>
            <p>{project.like}</p>
        </div>
    )
    }
  }
  const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.project.authorId);
    // const id = ownProps.project.authorId;
    // return {
    //   project: ownProps.project,
    // }
    return {
        auth: state.firebase.auth
    } 
}

  const mapDispatchToProps = dispatch => {
    return {
    increaseLike: (like) => dispatch(increaseLike(like))
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectLikes)
    
// const ProjectLikes  = (props) => {
//     const { project } = props;

//     const handleClick = (e) => {
//         e.preventDefault();
//         console.log(project);
//         increaseLike(project);
//     }
    

//     return (
        // <div className="container">
        //     <form onSubmit={handleClick}>
        //       <button>Like</button>
        //     </form>
        //       <p>{project.like}</p>
//         </div>
//       )
// }

// const mapStateToProps = (state, ownProps) => {
//     console.log(ownProps.project.authorId);
//     const id = ownProps.project.authorId;
//     return {
//       project: ownProps.project,
//     }
  
// }

//   const mapDispatchToProps = dispatch => {
//     return {
//     increaseLike: (project) => dispatch(increaseLike(project))
//     }
//   }
  
//   export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect([{
//       collection: 'projects'
//     }])
//   )(ProjectLikes)  