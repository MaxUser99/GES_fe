import React from "react";
import { RootStore } from "./RootStore";

export const stores = new RootStore();
export const StoreContext = React.createContext(stores);
