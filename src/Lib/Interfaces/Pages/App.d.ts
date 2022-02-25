import { AppInitialProps } from "next/app";

export interface AppWithStore extends AppInitialProps {
    store: AppStore;
}