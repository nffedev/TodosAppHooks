/* 
  REACT-REDUX HOOKS
  Main point of these is to avoid having to pull in entire store into 
  components that don't have much need for it. Keeps components light.
  
  useSelector(): 
    - used in place of mapStateToProps
    - runs whenever function component renders (subscribes to store state)
    - purpose is to extract data from the Redux store state

  useDispatch():
    - used in place of mapDispatchToProps
    - returns to the reference to the dispatch object

  useStore(): 
    - returns reference of the Redux store that was wrapped in <provider>
    - not recommended for frequent use 
    - can be used in scenarios like replacing reducers
*/
