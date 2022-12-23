export const SearchReducer = (state, action) => {
    switch (action.type) {
      case "Search_Loading": {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case "Search_Success": {
        return {
          ...state,
          isLoading: false,
          data: action.payload
        };
      }
      case "Search_Failure": {
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      }
      default:
        return state;
    }
  };
  