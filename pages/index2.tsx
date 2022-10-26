import type {NextPageContext, NextPage} from 'next';
import styles from '../styles/Home.module.css';
import {Component} from 'react';
import {PageProps, PageProps_Home} from './global';

class B extends Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log('B constructor', props);
    }

    componentDidMount() {
        console.log('B componentDidMount');
    }

    render() {
        console.log('B render');
        return <div>B</div>;
    }
}

class Index2 extends Component<PageProps & PageProps_Home> {

    static async getInitialProps(ctx: NextPageContext): Promise<PageProps_Home> {
        console.log('index2 getInitialProps');
        const {req, res, query} = ctx;
        return {data: 3};
    };

    constructor(props: PageProps & PageProps_Home) {
        super(props);
        console.log('index2 constructor', props);
    }

    componentDidMount() {
        console.log('index2 componentDidMount', this.props);
    }

    render() {
        console.log('index2 render', this.props);
        return (
            <div id={`page-index`} className={styles.container}>
                index2 <B/>
            </div>
        );
    }
}

export default Index2;
