import typescript                    from "rollup-plugin-typescript2";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import replace                       from 'rollup-plugin-replace';
import postcss                       from 'rollup-plugin-postcss';
// import del                        from 'rollup-plugin-delete';
import resolve                       from '@rollup/plugin-node-resolve';
import commonjs                      from '@rollup/plugin-commonjs';
import image                         from '@rollup/plugin-image';
import json                          from '@rollup/plugin-json';
// import copy                       from 'rollup-plugin-copy';
// import { terser }                 from "rollup-plugin-terser";

import pkg from "./package.json";

export default [
    {
        input   : "src/index.ts",
        plugins : [
            /* del( {
                targets : 'dist/*',
                runOnce : true
            } ), */
            excludeDependenciesFromBundle( {
                peerDependencies : true,
                dependencies     : true,
                devDependencies  : true
            } ),
            json(),
            image(),
            replace( {
                PACKAGE_VERSION : JSON.stringify( pkg.version ),
                PACKAGE_NAME    : JSON.stringify( pkg.name )
            } ),
            postcss( {
                extract : true,
                modules : false
            } ),
            typescript( {
                tsconfig  : "./tsconfig.json",
                verbosity : 0
            } ),
            resolve( {
                preferBuiltins : true,
                browser        : true
            } ),
            commonjs(),
            /* copy( {
                targets : [
                    {
                        src  : 'src/styles',
                        dest : 'dist'
                    }
                ]
            } ) */
        ],
        output  : [
            { file : pkg.module, format : "esm" }
            /* { file : "dist/index.cjs.min.js", format : "cjs", plugins : [ terser() ] }, */
        ]
    }
];
