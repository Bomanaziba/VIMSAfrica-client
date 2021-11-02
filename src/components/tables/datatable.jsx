
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from 'primereact/paginator';

const ServerSideDatatable = (props) => {

    const [first, setFirst] = React.useState(props.PageIndex);
    const [loading, setLoading] = React.useState(false);
    const [data, setDate] = React.useState(props.Data);
    const [size, setSize] = React.useState(0)
    const [globalFilter, setGlobalFilter] = React.useState(null);



    const column = props.Columns.map(p => (
        <Column
            field={p.field}
            header={p.header}
        ></Column>
    ));

    React.useEffect(() => {
        setDate(props.Data);
        setSize(props.PageSize)
    }, [props.Data, props.PageIndex, props.PageSize, props.SearchParams]);

    const codeFilter = (value, filter) => {
        return filter > value;
    }

    let header = (

        <div className="col-4 pull-right" style={{ 'textAlign': 'left' }}>
            <form action="#">
                <div className="input-group">
                    <input type="text" className="form-control" onInput={(e) => setGlobalFilter(e.target.value)} placeholder=" Search" size="50" />

                <div className="input-group-append">
                    <span className="input-group-text">
                        <i className="icon-magnifier"></i>
                    </span>
                </div>
                </div>
            </form>
        </div>

    );


    const footer = `In total there are ${size} ${props.Title}.`;


    return (
        <div className="card-body p-0">
            <DataTable
                value={data}
                globalFilter={globalFilter}
                className="table-responsive"
                tableClassName="table table-padded recent-order-list-table table-responsive-fix-big"
                paginator
                
                rows={size}
                header={header}
                rowsPerPageOptions={[10, 20, 50, 100]}
                footer={footer}>
                {column}
            </DataTable>
        </div>
    );
};

export default ServerSideDatatable;