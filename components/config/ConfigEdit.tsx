import {Edit, SaveButton, SimpleForm, TextInput, Toolbar} from 'react-admin';
import React from "react";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

const PostEditToolbar = (props: any) => (
    <Toolbar {...props} >
        <SaveButton alwaysEnable/>
    </Toolbar>
);

export const ConfigEdit = () => {
    return (
        <Edit actions={<PostCreateEditActions/>}>
            <SimpleForm toolbar={<PostEditToolbar/>}>
                <TextInput source="id" name="id" disabled fullWidth/>
                <TextInput source="title" name="title" label="配置名称" fullWidth/>
                <TextInput source="tip" name="tip" label="提示信息" fullWidth/>
                <TextInput source="value" name="value" label="配置值" fullWidth multiline rows={5}/>
            </SimpleForm>
        </Edit>
    )
};