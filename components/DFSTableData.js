import React, { useEffect } from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import DFSTableCell from './DFSTableCell'


const DFSTableData = (props) => {
    useEffect(() => {
        Object.keys(props.data).map(() => {

        })
    }, [])
    return(
        <TableRow>
            {/* <TableCell component="th" scope="row">
            {props.name}
            </TableCell> */}
            {Object.keys(props.data).map((keyName) => {
                return (
                <DFSTableCell data = {props.data[keyName]} />
                )
            })}
        </TableRow>
    )
}

export default DFSTableData