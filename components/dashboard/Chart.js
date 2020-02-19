import React, { useEffect, useContext, useState } from 'react';
import DFSContext from '../context/context'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';





const Example = () => {
    const {filteredDFSRes} = useContext(DFSContext)

    const [data, setData] = useState([
        {
          date: 'Page A', winnings: 4000
        },
        {
          date: 'Page B', winnings: 3000
        },
        {
          date: 'Page C', winnings: -1000
        },
        {
          date: 'Page D', winnings: 500
        },
        {
          date: 'Page E', winnings: -2000
        },
        {
          date: 'Page F', winnings: -250
        },
        {
          date: 'Page G', winnings: 3490
        },
      ])

      const gradientOffset = () => {
        const dataMax = Math.max(...data.map(i => i.winnings));
        const dataMin = Math.min(...data.map(i => i.winnings));
      
        if (dataMax <= 0) {
          return 0;
        }
        if (dataMin >= 0) {
          return 1;
        }
      
        return dataMax / (dataMax - dataMin);
      };
      
      let off = gradientOffset();

      useEffect(() => {
        //   if(filteredDFSRes) {
        //     console.log(filteredDFSRes)
        //   }
        console.log(data)
        off =  gradientOffset();
        if (filteredDFSRes) {
        const newDataArray = []
        let runningTotal = 0
          console.log(filteredDFSRes)
        const myFilteredDFSRes = [...filteredDFSRes].sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(a.Contest_Date_EST) - new Date(b.Contest_Date_EST);
        });

        console.log(myFilteredDFSRes)
        
        myFilteredDFSRes.forEach(game => {
            // const date = new Date(game.Contest_Date_EST)
            //   const newdate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

            var a = game.Contest_Date_EST.split(/-|\s|:/);
            var date = new Date(a[0], a[1] -1, a[2], a[3], a[4], a[5]);
              // const date = new Date(row.Contest_Date_EST)
              // const newdate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

              const newdate = date.toLocaleDateString()

              runningTotal += (-game.Entry_Fee + game.Winnings_Non_Ticket + game.Winnings_Ticket)
              const newObj = {
                  date: newdate,
                  winnings: Number(runningTotal.toFixed(2))
              }
              console.log(newObj)
              newDataArray.push(newObj)
        })
       
        console.log(newDataArray)
        setData(newDataArray)
    }
      }, [filteredDFSRes])
  
    return (
        <ResponsiveContainer width='100%' aspect={4.0/1.5}>
            <AreaChart
                // width={`100%`}
                // height={400}
                data={data}
                margin={{
                top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset={off} stopColor="green" stopOpacity={1} />
                    <stop offset={off} stopColor="red" stopOpacity={1} />
                </linearGradient>
                </defs>
                <Area type="monotone" dataKey="winnings" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default Example