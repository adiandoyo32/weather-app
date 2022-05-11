/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly REACT_APP_WEATHER_API_KEY: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
