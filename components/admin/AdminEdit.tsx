import {Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from 'react-admin';
import React, {useState} from "react";
import {timestamp} from "@/common/util";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const AdminEdit = () => {

    const [authGroupId, setAuthGroupId] = useState<number | null>();

    const handleAuthGroupId = (e: any) => setAuthGroupId(parseInt(e.target.value));

    const transform = async (data: any) => {
        return {
            ...data,
            auth_group: authGroupId,
            updatetime: timestamp()
        };
    };

    return (
        <Edit transform={transform} actions={<PostCreateEditActions/>}>
            <SimpleForm>
                <TextInput source="id" name="id" disabled fullWidth/>
                <ReferenceInput source="auth_group.id"
                                name="auth-groups-id"
                                reference="auth-groups"
                >
                    <SelectInput label="所属分组"
                                 validate={required()}
                                 onChange={handleAuthGroupId}
                                 fullWidth
                    />
                </ReferenceInput>
                <TextInput source="username" name="username" label="用户名" fullWidth/>
                <TextInput source="nickname" name="nickname" label="昵称" fullWidth/>
                <TextInput source="password" name="password" label="密码" fullWidth/>
                {/*<TextInput source="salt" name="salt" label="密码盐" fullWidth/>*/}
                <TextInput source="admin_address" name="admin_address" label="地址" fullWidth/>
                <TextInput source="admin_private_key" name="admin_private_key" label="私钥" fullWidth/>
            </SimpleForm>
        </Edit>
    );
}