import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@atlaskit/icon";
import ErrorIcon from "@atlaskit/icon/glyph/error";
import { ColorThemes, Icons, TextStyles } from "../../styleGuide";
import {
  isFavorite,
  favoriteTypes
} from "../../../store/base/favorites/selectors";
import { updateFavorite } from "../../../store/base/favorites/actions";

const { favorite, favoriteSelected } = Icons;

class FavoriteIcon extends Component {
  render() {
    const { size, id, type, isFavorite, handleUpdateFavorite } = this.props;
    if (!id || !type || !favoriteTypes.includes(type)) {
      return <ErrorIcon size={size || "large"} />;
    }
    return (
      <div
        style={{
          width: "16px",
          height: "16px"
        }}
        onClick={() => {
          handleUpdateFavorite(id, type);
        }}
      >
        <Icon
          glyph={isFavorite ? favoriteSelected : favorite}
          size={size || "large"}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    isFavorite: isFavorite(state, props.id, props.type)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUpdateFavorite: (id, type) => dispatch(updateFavorite(id, type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIcon);
