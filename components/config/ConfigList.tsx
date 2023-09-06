import {
    List,
    SimpleList
} from 'react-admin';
import * as React from "react";

export const ConfigList = () => (
    <List filter={{"group": "swap"}}>
        {/*<DatagridConfigurable*/}
        {/*    sx={{*/}
        {/*        '& .RaDatagrid-root': {},*/}
        {/*        '& .RaDatagrid-tableWrapper': {*/}
        {/*            maxWidth: "83vw",*/}
        {/*            overflowX: "auto"*/}
        {/*        },*/}
        {/*        '& .RaDatagrid-thead': {*/}
        {/*            whiteSpace: "nowrap",*/}
        {/*        },*/}
        {/*        '& .RaDatagrid-row': {*/}
        {/*            whiteSpace: "nowrap",*/}
        {/*        },*/}
        {/*    }}>*/}
        {/*    <TextField source="id" label="配置信息ID" emptyText="-"/>*/}
        {/*    <TextField source="title" label="配置名称" emptyText="-"/>*/}
        {/*    <TextField source="tip" label="提示信息" emptyText="-"></TextField>*/}
        {/*    <TextField source="value" label="配置值" emptyText="-"/>*/}
        {/*    <EditButton/>*/}
        {/*</DatagridConfigurable>*/}

        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.value}`}
            tertiaryText={record => record.tip}
        />
    </List>
);