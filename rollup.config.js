import svgo from 'rollup-plugin-svgo';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/tour.vue',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'VueTourEasy'
    },
    {
      file: pkg.module,
      format: 'es'
    },
  ],
  plugins: [
    svgo({
      plugins: [{
        cleanupAttrs: true,
      }, {
        removeDoctype: true,
      },{
        removeXMLProcInst: true,
      },{
        removeComments: true,
      },{
        removeMetadata: true,
      },{
        removeTitle: true,
      },{
        removeDesc: true,
      },{
        removeUselessDefs: true,
      },{
        removeEditorsNSData: true,
      },{
        removeEmptyAttrs: true,
      },{
        removeHiddenElems: true,
      },{
        removeEmptyText: true,
      },{
        removeEmptyContainers: true,
      },{
        removeViewBox: false,
      },{
        cleanUpEnableBackground: true,
      },{
        convertStyleToAttrs: true,
      },{
        convertColors: true,
      },{
        convertPathData: true,
      },{
        convertTransform: true,
      },{
        removeUnknownsAndDefaults: true,
      },{
        removeNonInheritableGroupAttrs: true,
      },{
        removeUselessStrokeAndFill: true,
      },{
        removeUnusedNS: true,
      },{
        cleanupIDs: true,
      },{
        cleanupNumericValues: true,
      },{
        moveElemsAttrsToGroup: true,
      },{
        moveGroupAttrsToElems: true,
      },{
        collapseGroups: true,
      },{
        removeRasterImages: false,
      },{
        mergePaths: true,
      },{
        convertShapeToPath: true,
      },{
        sortAttrs: true,
      },{
        transformsWithOnePath: false,
      },{
        removeDimensions: true,
      }]
    }),
    vue({
      css: true
    }),
    babel()
  ],
};
