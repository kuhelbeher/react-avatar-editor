import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies)

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
  external: external,
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      classnames: 'classNames',
    },
    file: pkg.main,
    format: 'umd',
    name: 'AvatarEditor',
    sourcemap: false,
  },
}
