const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "ADDARTICLE" : {
            const newArr = [...state.articles] ;
            newArr.unshift(action.payload);
            return {
               // ...state,
                articles : newArr
            }
        }
        case "LOADARTICLES" : {
            return {
                ...state,
                articles : action.payload
            }
        }
    }
    return state
}

export default articleReducer


export const getArticles = () => dispatch => {
    fetch('https://newsapi.org/v2/top-headlines?country=fr&apiKey=b0100291876748af86eea20cfc4ea126')
    //fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADARTICLES',
            payload: data.articles
        })

    })

}
