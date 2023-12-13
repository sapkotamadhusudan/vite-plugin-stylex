import { PluginItem } from '@babel/core';
import { Plugin } from 'vite';
import { FilterPattern } from '@rollup/pluginutils';

interface UnstableModuleResolution {
    type: 'commonJS' | 'haste' | 'experimental_crossFileParsing';
    rootDir: string;
}
interface BabelConfig {
    plugins: Array<PluginItem>;
    presets: Array<PluginItem>;
}
interface StylexPluginOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
    unstable_moduleResolution?: UnstableModuleResolution;
    fileName?: string;
    babelConfig?: BabelConfig;
    stylexImports?: string[];
    [prop: string]: any;
}
declare function stylexPlugin(opts?: StylexPluginOptions): Plugin;

export { stylexPlugin };
