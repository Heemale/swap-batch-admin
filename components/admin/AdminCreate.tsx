import {Create, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";
import React, {useState} from "react";
import {timestamp} from "@/common/util";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const AdminCreate = () => {

    const [authGroupId, setAuthGroupId] = useState<number | null>(1);

    const handleAuthGroupId = (e: any) => setAuthGroupId(parseInt(e.target.value));

    const transform = async (data: any) => {

        const {id, ...rest} = data; // Exclude 'id' property from data

        return {
            ...rest,
            auth_group: authGroupId,
            createtime: timestamp()
        };
    };

    return (
        <Create transform={transform} actions={<PostCreateEditActions/>}>
            <SimpleForm>
                <ReferenceInput source="id"
                                name="auth-group-id"
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
        </Create>
    );

};