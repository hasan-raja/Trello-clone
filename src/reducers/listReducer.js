const initialState=[{
    title:"last episode",
    id:0,
    cards:[
        {
            id:0,
            text:"we created a static list of card"
        },
        {
            id:1,
            text:"we created a static list of card 2"
        },
    ]
},
{
    title:"new episode",
    id:1,
    cards:[
        {
            id:0,
            text:"we created a renducer"
        },
        {
            id:1,
            text:"we created a static list of card 21"
        },
        {
            id:2,
            text:"we created a static list of card 22"
        },
    ]
},]

const listReducer=(state=initialState,action)=> {
    switch(action.type){
        default:
            return state;
    }
}

export default listReducer;