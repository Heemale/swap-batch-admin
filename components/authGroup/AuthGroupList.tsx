import {
    CreateButton, ExportButton,
    FilterButton,
    List, NumberField, SelectColumnsButton, SelectField, SelectInput,
    SimpleList, TextField, TextInput, TopToolbar
} from 'react-admin';
import * as React from "react";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";
import {taskTxStatusForQuery} from "@/common/constants";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="分组ID"/>,
    <TextInput key="name" name="name" source="name" label="名称"/>,
];

const PostListActions = () => (
    <TopToolbar>
        <SelectColumnsButton/>
        <FilterButton/>
        <ExportButton/>
    </TopToolbar>
);

export const AuthGroupList = () => (
    <List
        filters={postFilters}
        actions={<PostListActions/>}
    >
        <MyDatagridConfigurable hasEdit>
            <TextField source="id" label="分组ID"/>
            <TextField source="name" label="名称"/>
        </MyDatagridConfigurable>
    </List>
);