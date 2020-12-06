import typescript                    from "rollup-plugin-typescript2";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import babel                         from 'rollup-plugin-babel';
import { DEFAULT_EXTENSIONS }        from '@babel/core';
import replace                       from '@rollup/plugin-replace';
import resolve                       from '@rollup/plugin-node-resolve';
import commonjs                      from '@rollup/plugin-commonjs';
import json                          from '@rollup/plugin-json';

import pkg from "./package.json";

// TODO why does this (babel) crap not bundle in core-js polyfills?

export default [
    {
        input   : "src/index.ts",
        plugins : [
            excludeDependenciesFromBundle( {
                peerDependencies : true,
                dependencies     : false
            } ),
            replace( {
                PACKAGE_VERSION : JSON.stringify( pkg.version ),
                PACKAGE_NAME    : JSON.stringify( pkg.name )
            } ),
            json(),
            resolve( {
                preferBuiltins : true,
                browser        : true
            } ),
            typescript( {
                tsconfig : "./tsconfig.build.json"
            } ),
            babel( {
                externalHelpers : true,
                extensions      : [
                    ...DEFAULT_EXTENSIONS,
                    '.ts',
                    '.tsx'
                ]
            } ),
            commonjs()
        ],
        output  : [
            { file : pkg.module, format : "esm" }
        ]
    }
];
