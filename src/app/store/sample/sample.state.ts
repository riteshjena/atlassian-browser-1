export interface SampleState {
  counter: number;
  selectedId: string;
  selectedPath: Array<string>;
}
export const initialState: SampleState = {
  counter: 0,
  selectedId: "11",
  selectedPath: ["3", "6", "11"],
};
