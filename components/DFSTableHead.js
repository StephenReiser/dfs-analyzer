import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


const DFSTableHead = () => {
    return(
        <TableHead>
          <TableRow>
            <TableCell>Sport</TableCell>
            <TableCell align="right">Game_Type</TableCell>
            <TableCell align="right">Entry_Key</TableCell>
            <TableCell align="right">Entry</TableCell>
            <TableCell align="right">Contest_Key</TableCell>
            <TableCell align="right">Contest_Date_EST</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Winnings_Non_Ticket</TableCell>
            <TableCell align="right">Winnings_Ticket</TableCell>
            <TableCell align="right">Contest_Entries</TableCell>
            <TableCell align="right">Entry_Fee</TableCell>
            <TableCell align="right">Prize_Pool</TableCell>
            <TableCell align="right">Places_Paid</TableCell>

          </TableRow>
        </TableHead>
    )
}

export default DFSTableHead
