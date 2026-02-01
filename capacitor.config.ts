import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shhighschools.app',
  appName: 'SH Highschools',
  webDir: 'dist',
  server: {
    allowNavigation: ['sh-highschools-flask.vercel.app']
  }
};

export default config;
