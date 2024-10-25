import { EComponentTypes } from "../enums";
import { CreatorProps } from "../interfaces";

export const factoryTypesSchema: (CreatorProps & { key: number })[] = [
  {
    key: 1,
    type: EComponentTypes.TypeOne,
    color: "blue",
    text: "This is text #1",
  },
  {
    key: 2,
    type: EComponentTypes.TypeTwo,
    initValue: 10,
  },
  {
    key: 3,
    type: EComponentTypes.TypeThree,
    mode: "pending",
  },
  {
    key: 4,
    type: EComponentTypes.TypeOne,
    color: "blue",
    text: "This is text #2",
  },
  {
    key: 5,
    type: EComponentTypes.TypeTwo,
    initValue: 88210,
  },
  {
    key: 6,
    type: EComponentTypes.TypeThree,
    mode: "active",
  },
];
