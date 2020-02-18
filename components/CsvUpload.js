import React, { Component } from 'react'
 
import { CSVReader } from 'react-papaparse'
import Button from '@material-ui/core/Button';
 
class CSVComp extends Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef()
  }
  componentDidMount() {
    const myData = [
    {
      amount: '$5.00',
      test: 'test'
    },
    {
      amount: '$10.00',
      test: 'test'
    }

    

  ]

  const newData = [...myData]
  
  myData.map((item, i) => {
    console.log(item, i)
    newData[i].amount = parseInt(item.amount.slice(1))
  })
  
  console.log(newData)

  
  }
 
  handleReadCSV = (data) => {
    console.log(data)

    const cleanData = this.convertDataToNumbers(this.convertToObject(data))
    this.props.setMyData(cleanData)
    
    
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }
 
  handleImportOffer = () => {
    this.fileInput.current.click()
  }

  convertToObject = (anArray) => {
    var data = anArray,
    keys = data.data[0],
    result = data.data.slice(2).map(function (a) {
        var temp = {};
        keys.forEach(function (k, i) {
            temp[k] = a[i];
        })
        return temp;
    });
    
    return result

};
convertDataToNumbers = (badArray) => {
  const myData = [...badArray]
  
  // so this mostly works but I think there is somewhere that is throwing an error - so need to put an error handler some how - also this is super stupid the way I'm doing it... no way this is effecient
  myData.map((item, i) => {
    console.log(item, i)
    myData[i].Entry_Key = parseInt(item.Entry_Key)
    myData[i].Contest_Key = parseInt(item.Contest_Key)
    myData[i].Place = parseInt(item.Place)
    myData[i].Points = parseInt(item.Points)
    myData[i].Winnings_Non_Ticket = parseInt(item.Winnings_Non_Ticket.slice(1)) || 0
    myData[i].Winnings_Ticket = parseInt(item.Winnings_Ticket.slice(1)) || 0
    myData[i].Contest_Entries = parseInt(item.Contest_Entries)
    myData[i].Entry_Fee = parseInt(item.Entry_Fee.slice(1))
    myData[i].Prize_Pool = parseInt(item.Prize_Pool.slice(1))
    myData[i].Places_Paid = parseInt(item.Places_Paid)
    


  })
  
  console.log(myData)
  return myData
  
    


}
 
  render() {
    return (
      <>
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{display: 'none'}}
          onError={this.handleOnError}
        />

        <Button variant="contained" color="primary" onClick={this.handleImportOffer}>
            Import
        </Button>
       
      </>
    )
  }
}
 
export default CSVComp