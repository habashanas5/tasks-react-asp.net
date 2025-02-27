// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import "../assets/styles/MasterLayout.scss";
import MainScreen from './components/MainScreen/MainScreen';

function MasterLayout() {
    return (
        <div className='all'>
            <Header className="header" />
            <MainScreen className="main" />
            <Footer className="footer" />
        </div>
    );
}

export default MasterLayout;