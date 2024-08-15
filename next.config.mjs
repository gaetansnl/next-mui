import { withPigment } from '@pigment-css/nextjs-plugin';
import {extendTheme} from "@mui/material";

const nextConfig = {
    output: "standalone",
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
    theme: extendTheme(),
    transformSx: true,
    transformLibraries: ["@mui/material"]
}; // we will refer to this later

export default withPigment(nextConfig, pigmentConfig);