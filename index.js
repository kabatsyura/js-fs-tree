import {
  mkfile, mkdir, isDirectory, isFile, map, getName
} from '@hexlet/immutable-fs-trees/index.js';

isFile(mkfile('config')); // true
isDirectory(mkdir('etc')); // true

const tree = mkdir('etc', [mkfile('Makefile'), mkfile('README.MD'), mkdir('dist'), mkdir('__tests__', [mkfile('half.test.js')]),
 mkfile('babel.config.js')], mkdir('node_modules', [mkdir('@babel', [mkdir('cli', [mkfile('LICENCE')])])]));

const callbackFn = (node) => {
  const { name } = node;
  const newName = name.toUpperCase();
  return { ...node, name: newName };
};

console.log(map(callbackFn, tree));
// {
//   name: 'ETC',
//   children: [
//     { name: 'CONFIG', meta: {}, type: 'file' },
//     { name: 'HOSTS', meta: {}, type: 'file' }
//   ],
//   meta: {},
//   type: 'directory',
// }