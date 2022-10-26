import type {NextPageContext, NextPage} from 'next';
import styles from '../styles/Home.module.css';
import {Component} from 'react';
import {PageProps, PageProps_Home} from './global';
import Router from 'next/router';

class A extends Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log('A constructor', props);
    }

    componentDidMount() {
        console.log('A componentDidMount');
    }

    render() {
        console.log('A render');
        return <div>A</div>;
    }
}

class Home extends Component<PageProps & PageProps_Home> {

    static async getInitialProps(ctx: NextPageContext): Promise<PageProps_Home> {
        console.log('home getInitialProps');
        const {req, res, query} = ctx;
        return {data: 2};
    };

    constructor(props: PageProps & PageProps_Home) {
        super(props);
        console.log('home constructor', props);
    }

    componentDidMount() {
        console.log('home componentDidMount', this.props);
    }

    render() {
        console.log('home render', this.props);
        return (
            <div id={`page-index`} className={styles.container}>
                初始化界面 <A/>
                <button onClick={() => {
                    Router.push('/index2');
                }}>跳转</button>
            </div>
        );
    }
}

export default Home;
