// Import style in favor of webpack bundle
import './assets/styles/custom.scss';

// GDYMC Import module scripts
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./custom_modules/', true, /\.index\.js$/));