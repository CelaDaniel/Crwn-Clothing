import React from "react";
import { Route } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <Route
        render={({ history }) => (
          <h1
            className="title"
            onClick={() => {
              history.push(`shop/${title?.toLowerCase()}`);
            }}
          >
            {title}
          </h1>
        )}
      />
      <div className="preview">
        {items
          ?.filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
