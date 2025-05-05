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
