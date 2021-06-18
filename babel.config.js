
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      "production": {
        "plugins": ["ignite-ignore-reactotron"]
      }
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            scenes: './src/scenes', 
            theme: './src/theme',
            utils: './src/utils',
            modules: './src/modules'
          },
        },
      ],
    ],
  };
};
