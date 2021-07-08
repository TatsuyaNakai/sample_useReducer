const events=(state=[], action)=>{
    switch(action.type){
        case 'CREATE_EVENT':
            // const length=state.length;
            const event= {id: state.length+1, title:action.title, body:action.body};
            // let id= length ===0? 1 : state[length-1].id+1;
            return [...state, event];
        case 'DELETE_EVENT':
            return 
        case 'DELETE_ALL_EVENTS':
            return state=[];
        default:
            return state
    }
}

export default events;