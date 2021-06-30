import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import moment from 'moment';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport, ColumnToggle  } from 'react-bootstrap-table2-toolkit';
import ActionFormatter from '../components/ActionFormatter';
import Slide from 'react-reveal/Slide';



class PeopleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

            people: [],
            columns: [
                
                {
                    dataField: 'actions',
                    text: '',
                    isDummyField: true,
                    csvExport: false,
                    formatter: this.actionsFormatter,
                    headerStyle: (colum, colIndex) => {
                        return { width: '4rem' };
                    }
                },
                
                {
                    dataField: 'name', text: 'FirstName', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                },
                {
                    dataField: 'lsname', text: 'LastName', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                },
                {
                    dataField: 'sex', text: 'Sex', sort: true, sortCaret: this.sortIcon, 
                    headerStyle: (colum, colIndex) => {
                        return { width: '5rem' };
                    }
                },
                {
                    dataField: 'age', text: 'Age', sort: true, sortCaret: this.sortIcon, 
                    headerStyle: (colum, colIndex) => {
                        return { width: '5rem' };
                    }
                },
                {
                    dataField: 'birth', text: 'Birth', formatter: this.birthFormatter,
                    sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '7rem' };
                    }
                },
                {
                    dataField: 'rollno', text: 'Contact', formatter: this.rollnoFormatter, 
                    headerStyle: (colum, colIndex) => {
                        return { width: '7rem'};
                    }
                },
                {
                    dataField: 'email', text: 'Email',  headerStyle: (colum, colIndex) => {
                        return { width: '14rem' };
                    }
                },
                {
                    dataField: 'jobs', text: 'Job', sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                },
                {
                    dataField: 'country', text: 'Country', sort: true, sortCaret: this.sortIcon,  headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                },
                {
                    dataField: 'region', text: 'Region', sort: true, sortCaret: this.sortIcon,  headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                }
            ],
            
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/people")
            .then((res) => {
                this.setState({ people: res.data });
            }).catch(function (error) {
                console.log(error);
            });
    }
   
    actionsFormatter = (cell, row) => <ActionFormatter _id={row._id} />;

    birthFormatter = (cell, row) => {
        return <p>{moment(cell).format('DD-MM-YYYY')} </p>;
    }

    rollnoFormatter = (cell, row) => {
        return <p>0{cell}</p>;
    }
    sortIcon = (order, column)=>{
      
        if (!order) return (<span><i class='fas ml-1'>&#xf0d8;</i><i class='fas'>&#xf0d7;</i></span>);
        else if (order === 'asc') return (<span><i class='fas ml-1'>&#xf0d8;</i><font color="yellow"><i class='fas'>&#xf0d7;</i></font></span>);
        else if (order === 'desc') return (<span><font color="yellow"><i class='fas ml-1'>&#xf0d8;</i></font><i class='fas'>&#xf0d7;</i></span>);
         return null;
     
 }

    handleDataChange = ({ dataSize }) => {
        this.setState({ rowCount: dataSize });
    }

    render() {
        const { SearchBar, ClearSearchButton  } = Search;
        const CustomToggleList = ({
            columns,
            onColumnToggle,
            toggles
        }) => (
                <div className="btn-group btn-group-toggle toggle-class" data-toggle="buttons">
                    {
                        columns
                            .map(column => ({
                                ...column,
                                toggle: toggles[column.dataField]
                            }))
                            .map(column => (
                                <button
                                    type="button"
                                    key={column.dataField}
                                    className={`btn btn-toggle-table  ${column.toggle ? 'active' : ''}`}
                                    data-toggle="button"
                                    aria-pressed={column.toggle ? 'true' : 'false'}
                                    onClick={() => onColumnToggle(column.dataField)}
                                >
                                    {column.text}
                                </button>
                            ))
                    }
                </div>
            );


        const MyExportCSV = (props) => {
            const handleClick = () => {
                props.onExport();
            };
            return (
                <div class="csv-class">
                    <button className="btn-filter btn-success " onClick={handleClick}>Export to CSV</button>
                </div>
            );
        };
        const pagination = paginationFactory({
            page: 1,
            sizePerPage: 25,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerPage) {
                console.log('page', page);
                console.log('sizePerPage', sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage) {
                console.log('page', page);
                console.log('sizePerPage', sizePerPage);
            }
            
        });

        return (
            <div class="App-bg">
                <Slide bottom>
                <ToolkitProvider
                keyField="_id"
                    data={this.state.people}
                    columns={this.state.columns}
                    
                    search
                    exportCSV={{
                        fileName: 'file_table.csv',
                        separator: '|',
                        ignoreHeader: true,
                        noAutoBOM: false
                    }}
                        columnToggle
                >
                    {
                        props => (
                            <div>
                               
                                <SearchBar
                                    {...props.searchProps}
                                    className="search-class" />
                                <MyExportCSV {...props.csvProps} />
                                
                                <ClearSearchButton
                                    {...props.searchProps}
                                    className="btn-filter clear-class"
                                />
                                <br/><br/>
                                <CustomToggleList {...props.columnToggleProps} />
                                <BootstrapTable
                                    
                                    {...props.baseProps}
                                    hover
                                    headerClasses="header-class"
                                    pagination={pagination}
                                    rowClasses="custom-row-class"
                                />
                               
                            </div>
                        )
                    }
                </ToolkitProvider>
                </Slide>
            </div>
        );
    }
}

export default PeopleTable;

