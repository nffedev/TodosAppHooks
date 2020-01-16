import React from "react";

// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import Icon from "@atlaskit/icon";
import ErrorIcon from "@atlaskit/icon/glyph/error";
import { ColorThemes, Icons, TextStyles } from "../../styleGuide";
import {
  isFavorite,
  favoriteTypes
} from "../../../store/base/favorites/selectors";
import { updateFavorite } from "../../../store/base/favorites/actions";

const { favorite, favoriteSelected } = Icons;

/*
export const isFavorite = (state, id, type) => {
  if (!id || !type) return false
  const favoriteState = favoriteStateTree(state)
  return favoriteState.favoritesDictionary.hasOwnProperty(favoriteIdCreator(id, type))
}
*/

/*
export const isFavorite = ({id})(state, id, type) => {
  if (!id || !type) return false
  const favoriteState = favoriteStateTree(state)
  return favoriteState.favoritesDictionary.hasOwnProperty(favoriteIdCreator(id, type))
}
*/

export const FavoriteIcon = props => {
  // const { size, id, type, isFavorite, handleUpdateFavorite } = this.props;
  const { size, id, type } = props;
  // NO IDEA IF WORKS? Something like this could work in theory, I think...
  // main difference is useSelector signature:
  // const somethingFromState = state => state.something
  // isFavorite has (state, id, type) => {...}
  const _isFavorite = useSelector(state => isFavorite(state, id, type));
  const dispatch = useDispatch();
  if (!id || !type || !favoriteTypes.includes(type)) {
    return <ErrorIcon size={size || "large"} />;
  }
  return (
    <div
      style={{
        width: "16px",
        height: "16px"
      }}
      // Again, I think this is right, but would have to test.
      onClick={() => dispatch(updateFavorite(id, type))}
    >
      <Icon
        glyph={_isFavorite ? favoriteSelected : favorite}
        size={size || "large"}
      />
    </div>
  );
};

// const mapStateToProps = (state, props) => {
//   return {
//     isFavorite: isFavorite(state, props.id, props.type)
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     handleUpdateFavorite: (id, type) => dispatch(updateFavorite(id, type))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FavoriteIcon);
