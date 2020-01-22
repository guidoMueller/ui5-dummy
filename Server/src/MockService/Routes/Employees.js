import EmployeeDummyJson from '../Entity/Employees.json'
import moment from 'moment';
import faker from 'faker'
import path from "path";

let getEmployee = ( count ) => {
  let newEmployee = JSON.parse( JSON.stringify( EmployeeDummyJson ) )
  newEmployee["__metadata"] = {
    "uri": "http://localhost:5000/odata/service.svc/Employees/Employees(" + count + ")",
    "type": "NorthwindModel.Employee"
  }

  let date = moment( new Date() ).format( "X" )
  newEmployee.EmployeeID = count
  newEmployee.LastName = faker.name.lastName()
  newEmployee.FirstName = faker.name.firstName()
  newEmployee.BirthDate = "\/Date(" + date + ")\/"

  return newEmployee
}

let getEmployees = ( count ) => {
  let returnObject = {
    d: {
      results: [],
      "__count": 10
    }
  }
  for ( let i = 1; i <= count; i++ ) {
    returnObject.d.results.push( new getEmployee( i ) )
  }

  return returnObject
}

let Employees = ( oApp ) => {
  oApp.get( '/odata/service.svc/Employees/([\\$])count', function( req, res ) {
    res.send( "10" )
  } );
  oApp.get( ['/odata/service.svc/Employees', '/odata/service.svc/Employees?([\\$])*'], function( req, res ) {
    //res.send( JSON.stringify( getEmployees( 10 ) ) )
    res.sendFile( path.join( __dirname, '../Entity/Employees.xml' ) );
  } );

}

export default Employees
