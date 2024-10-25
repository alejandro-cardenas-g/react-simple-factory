import { EComponentTypes } from "../enums";

interface ICreatorCommonProps {
  type: EComponentTypes;
}

export interface ITypeOneComponent extends ICreatorCommonProps {
  type: EComponentTypes.TypeOne;
  color: string;
  text: string;
}

export interface ITypeTwoComponent extends ICreatorCommonProps {
  type: EComponentTypes.TypeTwo;
  initValue: number;
}

export interface ITypeThreeComponent extends ICreatorCommonProps {
  type: EComponentTypes.TypeThree;
  mode: "active" | "inactive" | "pending";
}

export type CreatorProps =
  | ITypeOneComponent
  | ITypeTwoComponent
  | ITypeThreeComponent;
