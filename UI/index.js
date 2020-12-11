import request from './utils/net';
import * as mtlUI from './components/index';

export function createUI(options) {
  return {
    install(app = {}) {
      console.log(app, mtlUI.default, options);
      Object.keys(mtlUI.default).forEach((componentName) => {
        app.component(componentName, mtlUI.default[componentName]);
      });
    },
  };
}

export const net = request;

export default {
  createUI,
  net,
};
