import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/BasicUI/Header';
import App from '../app/App';
import Dialogs from './Dialogs';
import Forms from './Forms';

const navDef = [
    {id: 'mon', label: 'Monitoring', url: '/#mon', component: <Header text="Monitoring" />},
    {id: 'form', label: 'Form Widgets', url: '/#form', component: <Forms />},
    {id: 'widgets', label: 'Web Widgets', expand: true, children: [
        {id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: <Dialogs />},
        {id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: <Header text="Wiard" />},
        {id: 'tooltip', label: 'Tooltip', url: '/#widgets/tooltip', component: <Header text="Tooltips" />},
        {id: 'bars', label: 'Bars', url: '/#widgets/bars', component: <Header text="Bars" />},
        {id: 'alerts', label: 'Alerts', url: '/#widgets/alerts', component: <Header text="Alerts" />}
    ]},
    {id: 'mobile', label: 'Mobile Special', expand: true, children: [
        {id: 'infinite', label: 'Infinite Scroll', url: '/#widgets/infiniteScroll', component: <Header text="Infinite Scroll" />}
    ]}
];

const pagesDef = (nav => {
    let res = [];
    for (let i = 0; i < nav.length; i++) {
        let n = nav[i];
        if (n.children) {
            n.children.forEach(n => nav.push(n));
        } else {
            res.push(n);
        }
    }
    return res;
})(Array.from(navDef));

ReactDOM.render(<App name="OK" nav={navDef} pages={pagesDef} />, document.getElementById('root'));
