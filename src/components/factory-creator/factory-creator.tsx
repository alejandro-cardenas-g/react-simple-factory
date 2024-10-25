import React, { Fragment } from "react";
import { CreatorProps } from "../../interfaces";
import { EComponentTypes } from "../../enums";
import { TypeOne } from "../type-one";
import { TypeTwo } from "../type-two";
import { TypeThree } from "../type-three";

export const FactoryCreator: React.FC<CreatorProps> = (props) => {
  switch (props.type) {
    case EComponentTypes.TypeOne:
      return <TypeOne {...props} />;
    case EComponentTypes.TypeTwo:
      return <TypeTwo {...props} />;
    case EComponentTypes.TypeThree:
      return <TypeThree {...props} />;
    default:
      return <Fragment />;
  }
};
