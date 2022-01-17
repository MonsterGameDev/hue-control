import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Group, GroupsState } from "./groups.interfaces";





const selectGroupsSlice = (state:AppState) => state.groupsslice;

export const selectGroups = createSelector(
  selectGroupsSlice,
  (state) => state?.groups ?? []
)
