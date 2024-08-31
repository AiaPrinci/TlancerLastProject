import '../App.css';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Market } from '../PageComponent/MainComponent/MarketComponent/index';
import { Crypto } from './MainComponent/CryptoTextComponent/index';
import { Product } from './MainComponent/ProductComponent/index';
import { Comments } from './MainComponent/CommentsComponent';
import { Tabs } from './MainComponent/TabsComponent/index';
import { News } from './MainComponent/NewsComponent/index';
import { Form } from './MainComponent/FormComponent/index';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Post from './MainComponent/PostComponent/index';
import store from './redux/store';


export const Page = () => {


        ReactDOM.render(
        <Provider store={store}>
            <Header />
            <main>
                <Market />
                <Crypto />
                <Product />
                <Post />
                <Comments />
                <Tabs />
                <News />
                <Form />
            </main>
            <Footer />
        </Provider>,
        document.getElementById('root')
    );


}