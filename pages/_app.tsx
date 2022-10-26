import '../styles/globals.css';
import type {AppContext, AppInitialProps, AppProps, NextWebVitalsMetric} from 'next/app';
import App from 'next/app';
import {ConnectPageProps} from './global';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {Router} from 'next/router';

type AppState = {
    app: string,
};

//
Router.events.on('routeChangeStart', (evts) => {
    console.log('routeChangeStart', evts);
});

Router.events.on('beforeHistoryChange', (evts) => {
    console.log('beforeHistoryChange', evts);
});

Router.events.on('routeChangeComplete', (evts) => {
    console.log('routeChangeComplete', evts);
});

Router.events.on('routeChangeError', (evts) => {
    console.log('routeChangeError', evts);
});

Router.events.on('hashChangeStart', (evts) => {
    console.log('hashChangeStart', evts);
});

Router.events.on('hashChangeComplete', (evts) => {
    console.log('hashChangeComplete', evts);
});

class MyApp extends App<AppProps, ConnectPageProps, AppState> {

    static async getInitialProps(ctx: AppContext): Promise<AppInitialProps<ConnectPageProps>> {
        console.log('_app getInitialProps');
        const {Component, AppTree, router} = ctx;
        // 获取子组件的InitialProps数据
        const {pageProps} = await App.getInitialProps(ctx);
        return {pageProps: {test: 1, ...pageProps}};
    };

    constructor(props: AppProps & AppProps<ConnectPageProps>) {
        super(props);
        this.state = {
            app: 'myApp'
        };
        console.log('_app constructor', typeof window);
    }

    componentDidMount() {
        console.log('_app componentDidMount');
    }

    render(): JSX.Element {
        const {pageProps, Component, router, __N_SSG, __N_SSP} = this.props;
        console.log('_app render pageProps', pageProps, this.state);
        return (
            <Provider store={store}>
                <div id={`_app-global-layout-wrapper`}>
                    <Component {...pageProps} />
                </div>
            </Provider>
        );
    }
}

// 性能指标
export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric);
    const {label, name, value, id, startTime} = metric;
    // 浏览器性能
    if (label === 'web-vital') {
        switch (name) {
            case 'FCP':
                break;
            case 'LCP':
                break;
            case 'CLS':
                break;
            case 'FID':
                break;
            case 'TTFB':
                break;
            case 'INP':
                break;
        }
    }
    // 用户级性能
    if (label === 'custom') {
        switch (name) {
            case 'Next.js-hydration':
                break;
            case 'Next.js-render':
                break;
            case 'Next.js-route-change-to-render':
                break;
        }
    }
}

// 实际动态化的界面
export default MyApp;
