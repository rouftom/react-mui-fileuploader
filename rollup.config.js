import babel from '@rollup/plugin-babel'
import svg from 'rollup-plugin-svg'
import styles from "rollup-plugin-styles"
const autoprefixer = require('autoprefixer')
import typescript from '@rollup/plugin-typescript'

// the entry point for the library
const input = 'src/index.ts'
let config = []
let MODE = [{ fomart: 'esm' }, { fomart: 'umd' }]


MODE.map((m) => {
  let indexTs = {
    input: input,
    output: {
      // then name of your package
      name: "react-material-fileuploader",
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "auto",
      sourcemap: true,
      globals: {
        'react': 'React',
        'prop-types': 'PropTypes',
        '@mui/material': '@mui/material',
        '@babel/runtime': '@babel/runtime',
        '@mui/icons-material': '@mui/icons-material'
      },
    },
    // this externelizes react to prevent rollup from compiling it
    external: [
      "react",
      "@mui/icons-material",
      "@mui/lab",
      "@mui/material",
      "prop-types",
      /@babel\/runtime/
    ],
    plugins: [
      // these are babel comfigurations
      babel({
        exclude: 'node_modules/**',
        plugins: [
          '@babel/transform-runtime', 
          "@babel/plugin-proposal-optional-chaining"
        ],
        babelHelpers: 'runtime'
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      svg({ base64: true }),
      // this adds support for styles
      styles({
        postcss: {
          plugins: [
            autoprefixer()
          ]
        }
      })
    ]
  }

  config.push(indexTs)
})

export default [ ...config ]
