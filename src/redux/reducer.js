  // reducers
export default function blogs(state = [], action = {}) {
  switch(action.type) {
    case 'ADDBLOG':
    console.log(action.blog);
    
      return [
        ...state,
        action.blog
      ];
    case 'DELETEBLOG':
          console.log(action.blog.id);
          console.log(state);
          return state.filter((blog)=>blog.id !== action.blog.id);

    case 'UPDATEBLOG':
      return state.map(blog => {
        if (blog.id === action.blog.id) return action.blog;
        return blog;
      });

      case 'EDITBLOG':
      return state.map((blog)=>blog.id === action.id ? {...blog,editing:!blog.editing}:blog)
      
      case 'UPDATE':
      return state.map((blog)=>{
        if(blog.id === action.id) {
          return {
             ...blog,
             title:action.data.newTitle,
             message:action.data.newMessage,
             editing: !blog.editing
          }
        } else return blog;
      })
    case 'GETBLOG':
      const index = state.findIndex(item => item._id === action.blog._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.blog._id) return action.blog;
          return item;
        });
      } else {
        return [
          ...state,
          action.blog
        ];
      }

    case 'GETALLBLOGS':
      return action.blogs;
    default: return state;
  }
}