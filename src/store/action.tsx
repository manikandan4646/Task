const addData = (payload: any) => {
    const action = {
        type: "ADD_DATA",
        payload,
    };
    return action;
}

// const addData  = ()=>{
//     // Thunk Function
//     return async (dispatch: any)=>{
  
//         // Fetching results from an API : asynchronous action
//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
  
//         // Dispatching the action when async
//         // action has completed.
//         dispatch({
//             type : 'ADD_DATA',
//             payload : data
//         });
//     }
// }

export {
    addData
}