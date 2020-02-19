import React, {useEffect, useState, useContext} from 'react'
import DashboardLayout from './dashboard/DashboardLayout'
import DFSContext from './context/context'


const Dashboard = () => {
    const { filteredDFSRes } = useContext(DFSContext)
    const [roi, setROI ] = useState(0)
    const [buyIn, setBuyIn ] = useState(0)
    const [winnings, setWinnings ] = useState(0)
    const [profit, setProfit ] = useState(0)
    const [largestWins, setLargestWins ] = useState(null)
    
    useEffect(() => {
        if(filteredDFSRes) {
            calculateValues(filteredDFSRes)

        } else {
            setROI(0)
            setBuyIn(0)
            setWinnings(0)
            setProfit(0)
            setLargestWins(null)
        }
    }, [
        filteredDFSRes
    ])

    const calculateValues = (myData) => {
        let myBuyIn = 0
        let myWinnings = 0
        const sortedData = myData.sort((a, b) => a.Winnings_Non_Ticket - b.Winnings_Non_Ticket).slice(myData.length - 5, myData.length)

        myData.forEach(item => {
            myBuyIn = (myBuyIn + Number(item.Entry_Fee))
            
            myWinnings = (myWinnings + Number(item.Winnings_Non_Ticket) + Number(item.Winnings_Ticket))
        })
        setBuyIn(Number(myBuyIn.toFixed(2)).toLocaleString(undefined, {minimumFractionDigits:2}))
        setWinnings(Number(myWinnings.toFixed(2)).toLocaleString(undefined, {minimumFractionDigits:2}))
        setProfit(Number((myWinnings - myBuyIn).toFixed(2)).toLocaleString(undefined, {minimumFractionDigits:2}))
        setROI(((myWinnings - myBuyIn) / myBuyIn).toFixed(2))
        // console.log(myBuyIn)
        console.log(sortedData)
        setLargestWins(sortedData.reverse())
        // console.log(roi, buyIn, winnings, profit)

        
    }


    return(

        
            <DashboardLayout buyIn = {buyIn} winnings = {winnings} profit = {profit} roi = {roi} largestWins = {largestWins}/>
        
    )
}


export default Dashboard


// Header - Welcome - User Name
// Sub Head - Summary by 'list of filters'
// nice clean boxes with Total games played, avg buy in , ROI, and Net Profit/Loss
// Nice Chart?