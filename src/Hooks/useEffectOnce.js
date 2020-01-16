import { useEffect, useRef } from "react";

/*

EFFECTS ARE ONLY RAN AFTER LAYOUT RENDER
NO ACCESS TO PREVIOUS STATE OR PROPS
NEED TO USE REF INSTEAD

const Todos = () => {
  const [state, setState] = useState({user: 'Brian', todos: []})

  const previousUserRef = useRef(state.user)

  useEffect(() => {
     previousUserRef.current = state.user
  })

  useEffect(() => {
      const previousUser = previousUserRef.current
      if (!_.isEqual(previousUser, state.user) {
          console.log('Different user')
      }
  })
}
*/

export const useEffectOnce = callbackFn => {
  const didLoad = useRef(false);
  useEffect(() => {
    if (!didLoad.current) {
      callbackFn();
      didLoad.current = true;
    }
  });
};
