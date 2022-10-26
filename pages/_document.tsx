import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps, DocumentProps} from 'next/document';

// 处理首屏渲染的地方
class MyDocument extends Document<DocumentProps> {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const originalRenderPage = ctx.renderPage;

        // console.log('pathname', ctx.pathname);
        // console.log('query', ctx.query);
        // console.log('locales', ctx.locales);
        // console.log('err', ctx.err);
        // console.log('req', ctx.req);
        // console.log('res', ctx.res);

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => {
                    // App.defaultProps = {pageProps: {app: `App defaultProps`}};
                    // console.log('App', App);
                    return App;
                },
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => {
                    // Component.defaultProps = {defaultProps: `Component defaultProps`};
                    // console.log('Component', Component);
                    return Component;
                },
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);
        // console.log('_doc initialProps', initialProps);
        console.log('_doc initialProps');
        return initialProps;
    }

    constructor(props: DocumentProps) {
        super(props);
        console.log('_doc constructor');
    }

    componentDidMount() {
        console.log('_doc componentDidMount');
    }

    render() {
        // console.log('_doc render', this.props);
        console.log('_doc render');
        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                <script dangerouslySetInnerHTML={{__html: `window.onload = (e) => {console.log('_doc script', e)}`}}/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
