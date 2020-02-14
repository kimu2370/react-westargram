import React, {Component} from 'react';

class Comment extends Component {

   handleClick = (e,i) => {
      return this.props.onRemove(i);
   }

   render() {
      const comments = this.props.data.map((item,i)=>{
         return (
            <div key={i}>
               <span onClick={e=>this.handleClick(e,i)}>k_seungHyun</span>
               <span>{item.comment}</span>
            </div>
         );
      });
      return (
         <div className="post">
            {comments}
         </div>
      );
   }
}

export default Comment;