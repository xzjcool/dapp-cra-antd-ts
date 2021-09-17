const CracoLessPlugin = require('craco-less')

require('dotenv')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#CA3211',
              '@primary-bg': '#fff',
              '@modal-content-bg': '#fff',
              '@btn-primary-color': '#fff',
              '@btn-primary-bg': '#CA3211',
              '@btn-primary-hover-bg': 'rgb(112,22,41,0.8)',
              '@bnt-primary-hover-text-color': 'red',
              '@layout-body-background': '#fff',
              '@link-color': '#CA3211',
              '@border-color-base': '#CA3211',
              '@border-radius-base': '15px',
              '@disabled-color': 'rgba(0, 0, 0, 0.25)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
