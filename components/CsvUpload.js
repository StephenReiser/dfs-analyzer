import React, { Component } from 'react'
 
import { CSVReader } from 'react-papaparse'
import Button from '@material-ui/core/Button';
import TestData from './TestData'


 
class CSVComp extends Component {
  

  constructor(props) {
    super(props)
    this.fileInput = React.createRef()
  }

  

 
  handleReadCSV = (data) => {
    console.log(data)

    const cleanData = this.convertDataToNumbers(this.convertToObject(data))
    this.props.setMyData(cleanData)
    this.props.setFilterData(cleanData)
    
    
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
  myData.pop()
  // so this mostly works but I think there is somewhere that is throwing an error - so need to put an error handler some how - also this is super stupid the way I'm doing it... no way this is effecient
  myData.map((item, i) => {
    
    myData[i].Entry_Key = Number(item.Entry_Key)
    myData[i].Contest_Key = Number(item.Contest_Key)
    myData[i].Place = Number(item.Place)
    myData[i].Points = Number(item.Points)
    myData[i].Winnings_Non_Ticket = Number(item.Winnings_Non_Ticket.slice(1).replace(/,/g, ''))
    myData[i].Winnings_Ticket = Number(item.Winnings_Ticket.slice(1).replace(/,/g, ''))
    myData[i].Contest_Entries = Number(item.Contest_Entries)
    myData[i].Entry_Fee = Number(item.Entry_Fee.slice(1).replace(/,/g, ''))
    myData[i].Prize_Pool = Number(item.Prize_Pool.slice(1).replace(/,/g, ''))
    myData[i].Places_Paid = Number(item.Places_Paid)
    myData[i].FinishPerc = Number(item.Place)/Number(item.Contest_Entries)
    if (Number(item.Place) <= Number(item.Places_Paid)) {
      myData[i].Cashed = true
    } else {
      myData[i].Cashed = false
    }
    


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

       <TestData convertToNumbers = {this.convertDataToNumbers} convertToObject = {this.convertToObject}/>
      </>
    )
  }
}
 
export default CSVComp