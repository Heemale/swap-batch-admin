import {useRecordContext} from "react-admin";
import {formatTimestamp} from "@/common/util";
import * as React from "react";

const TimeTextField = ({source, label}: { source: string, label?: string }) => {

    const record = useRecordContext();

    const text = record[source] ? formatTimestamp(record[source]) : "-";

    return <span>{text}</span>;

};


export default TimeTextField;