import crudProvider from "ra-data-nestjsx-crud";
import {fetchUtils} from "react-admin";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from '@haxqer/ra-language-chinese';
import englishMessages from "ra-language-english";

// 为什么choices里面id要加1才能查询到正确的数据
export const taskTxStatusForQuery = [
    {id: '1', name: '未执行'},
    {id: '2', name: '管理员授权中'},
    {id: '3', name: '管理员授权完毕'},
    {id: '4', name: '打款中'},
    {id: '5', name: '打款完毕'},
    {id: '6', name: 'swap中'},
    {id: '7', name: 'swap完毕'},
    {id: '8', name: '归集中'},
    {id: '9', name: '归集完毕'},
];

export const txStatusForQuery = [
    {id: '1', name: '未交易'},
    {id: '2', name: '待交易'},
    {id: '3', name: '交易失败'},
    {id: '4', name: '待核验'},
    {id: '5', name: '核验失败'},
    {id: '6', name: '校验成功'},
];

export const taskTxStatusChoices = [
    {id: '0', name: '未执行'},
    {id: '1', name: '管理员授权中'},
    {id: '2', name: '管理员授权完毕'},
    {id: '3', name: '打款中'},
    {id: '4', name: '打款完毕'},
    {id: '5', name: 'swap中'},
    {id: '6', name: 'swap完毕'},
    {id: '7', name: '归集中'},
    {id: '8', name: '归集完毕'},
];

export const txStatusChoices = [
    {id: '0', name: '未交易'},
    {id: '1', name: '待交易'},
    {id: '2', name: '交易失败'},
    {id: '3', name: '待核验'},
    {id: '4', name: '核验失败'},
    {id: '5', name: '校验成功'},
];

export const switchChoices = [
    {id: 0, name: '×'},
    {id: 1, name: '√'},
];

export const walletSourceChoices = [
    {id: '0', name: '创建钱包'},
    {id: '1', name: '选择钱包'},
];

export const tradeTypeChoices = [
    {id: '0', name: '买入'},
    {id: '1', name: '卖出'},
]

export enum SwitchEnum {
    CLOSE = 0,
    OPEN = 1,
}

export enum Role {
    Super = 1,
    Admin = 2
}

export const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('auth');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = crudProvider(apiUrl, httpClient);

export const i18nProvider = polyglotI18nProvider(
    locale => (locale === 'zh' ? chineseMessages : englishMessages),
    'zh', // Default locale
    [{ locale: 'en', name: 'English' }, { locale: 'zh', name: '中文' }]
);