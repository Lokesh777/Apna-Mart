export const SearchLoadingAction = { type: "Search_Loading" };
export const SearchSuccessAction = { type: "Search_Success" };
export const SearchFailureAction = { type: "Search_Failure" };

export const SearchProd = (dispatch, query) => {
  dispatch(SearchLoadingAction);
  fetch(`https://apnamart-backend.onrender.com/products?q=${query}`)
    .then((res) => res.json())
    .then((res) => {
        console.log("query data avaial",res.fruit)
      dispatch({ ...SearchSuccessAction, payload: res.fruit });
    })
    .catch((err) => {
      dispatch(SearchFailureAction);
    });
};
