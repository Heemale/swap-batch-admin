import {
    CreateButton,
    EditButton,
    ExportButton,
    FilterButton,
    List,
    SelectColumnsButton,
    SelectField,
    TextField,
    TextInput,
    TopToolbar,
} from 'react-admin';
import * as React from "react";
import TimeTextField from "@/components/ui/TimeTextField";
import {switchChoices} from "@/common/constants";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="交易对ID"/>,
    <TextInput key="token0_address" name="token0_address" source="token0_address" label="第一代币地址"/>,
    <TextInput key="token1_address" name="token1_address" source="token1_address" label="第二代币地址"/>,
    <TextInput key="token0_name" name="token0_name" source="token0_name" label="第一代币名称"/>,
    <TextInput key="token1_name" name="token1_name" source="token1_name" label="第二代币名称"/>,
];

const PostListActions = () => (
    <TopToolbar>
        <SelectColumnsButton/>
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

export const TradePairList = () => (
    <List
        filters={postFilters}
        actions={<PostListActions/>}
    >
        <MyDatagridConfigurable hasEdit>
            <TextField source="id" label="交易对ID"/>
            <TextField source="token0_address" label="第一合约地址"/>
            <TextField source="token1_address" label="第二合约地址"/>
            <TextField source="token0_name" label="第一合约名称"/>
            <TextField source="token1_name" label="第二合约名称"/>
            <TextField source="limits" label="每次提交交易数"/>
            <SelectField source="open_switch" label="是否开放" choices={switchChoices}/>
        </MyDatagridConfigurable>
    </List>
);