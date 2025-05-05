import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import {
    sentryReactRouter,
    type SentryReactRouterBuildOptions,
} from "@sentry/react-router"

const sentryConfig: SentryReactRouterBuildOptions = {
    org: "personal-k99",
    project: "travel-agency",
    // An auth token is required for uploading source maps.
    authToken:
        "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",
    // ...
}

export default defineConfig((config) => {
    return {
        plugins: [
            reactRouter(),
            sentryReactRouter(sentryConfig, config),
            tailwindcss(),
            tsconfigPaths(),
        ],
        sentryConfig, // Also pass the config here!
        ssr: {
            noExternal: [/@syncfusion/],
        },
    }
})
