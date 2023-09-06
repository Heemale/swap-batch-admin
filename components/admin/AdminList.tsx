import {
    ExportButton,
    FilterButton,
    List,
    SelectColumnsButton,
    TextField,
    TextInput,
    TopToolbar,
} from 'react-admin';
import * as React from "react";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="管理员ID"/>,
    <TextInput key="username" name="username" source="username" label="用户名"/>,
    <TextInput key="admin_address" name="admin_address" source="admin_address" label="地址"/>,
    <TextInput key="admin_private_key" name="admin_private_key" source="admin_private_key" label="私钥"/>,
];

const PostListActions = () => (
    <TopToolbar>
        <SelectColumnsButton/>
        <FilterButton/>
        <ExportButton/>
    </TopToolbar>
);

export const AdminList = () => (
    <List filters={postFilters}
          actions={<PostListActions/>}
    >
        <MyDatagridConfigurable hasEdit>
            <TextField source="id" label="管理员ID" emptyText="-"/>
            <TextField source="auth_group.name" label="所属分组" emptyText="-"/>
            <TextField source="username" label="用户名" emptyText="-"/>
            <TextField source="nickname" label="昵称" emptyText="-"/>
            <TextField source="password" label="密码" emptyText="-"/>
            {/*<TextField source="salt" label="密码盐" emptyText="-"/>*/}
            <TextField source="admin_address" label="地址" emptyText="-"/>
            <TextField source="admin_private_key" label="私钥" emptyText="-"/>
        </MyDatagridConfigurable>
    </List>
);