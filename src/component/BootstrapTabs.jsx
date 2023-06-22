import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DynamicForm from './DynamicForm';
import TableForm from './TableForm';

function BootstrapTabs() {
      let generalBuildingInfo = [
        { name: 'AEA_Project_ID', type: 'text' },
        { name: 'Property_Name', type: 'text' },
        { name: 'Address', type: 'text' },
        { name: 'City', type: 'text' },
        { name: 'State', type: 'text' },
        { name: 'Zip_code', type: 'number' },
        { name: 'BBL', type: 'text' },
        { name: 'BIN', type: 'text' },
        { name: 'NYC_Bldg_Classification', type: 'text' },
        { name: 'Bldg_Classification_Description', type: 'text' },
        { name: 'Affordable_Market', type: 'text' },
        { name: 'Built_Year', type: 'number' },
        { name: 'Number_of_Floors', type: 'number' },
        { name: 'Number_of_Units', type: 'number' },
        { name: 'Gross_Area_ft2', type: 'number' },
        { name: 'Bldg_Perimeter_ft', type: 'number' },
        { name: 'Number_of_Heated_Floors', type: 'number' },
        { name: 'Est_Height_per_Floor_ft', type: 'number' },
        { name: 'Azimuth_of_North_Face', type: 'number' },
        { name: 'Electric_Metering', type: 'text' },
        { name: 'Nat_Gas_Metering', type: 'text' },
        { name: 'Cooking_Metering', type: 'text' },
        { name: 'General_Notes', type: 'text' },
      ];
      const numericFields = [
        { name: 'Zip_code', type: 'number' },
        { name: 'Built_Year', type: 'number' },
        { name: 'Number_of_Floors', type: 'number' },
        { name: 'Number_of_Units', type: 'number' },
        { name: 'Gross_Area_ft2', type: 'number' },
        { name: 'Bldg_Perimeter_ft', type: 'number' },
        { name: 'Number_of_Heated_Floors', type: 'number' },
        { name: 'Est_Height_per_Floor_ft', type: 'number' },
        { name: 'Azimuth_of_North_Face', type: 'number' },
      ];

      const facadeFields = [
        { name: 'FD_Id', type: 'text' },
        { name: 'Length', type: 'number' },
        { name: 'Width', type: 'number' },
        { name: 'Shape', type: 'text' },
      ];

      const facadeFieldsNumberic = [
        'Length','Width', 'BuildingId',
      ];
      
      const roofTopFields = [
        { name: 'RD_ID', type: 'text' },
        { name: 'Length', type: 'number' },
        { name: 'Width', type: 'number' },
      ];

      const roofTopFieldsNumberic = [
        'Length','Width', 'BuildingId',
      ];

      const wall= [        
        { name: 'Id', type: 'text' },
      { name: 'Length', type: 'number' },
      { name: 'Width', type: 'number' },];

      const tableName = "buildings";
      return (
        <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="general" title="General Info">
            <DynamicForm fields={generalBuildingInfo} numericFields={numericFields} apiUrl="http://127.0.0.1/webservices/connect.php" tableName={tableName} />
          </Tab>
          <Tab eventKey="roofCalc" title="Roof Calc">
            <TableForm fields={facadeFields} numericFields={facadeFieldsNumberic} apiUrl="http://127.0.0.1/webservices/roofCalc.php" tableName="facadeDeduction" />
            <TableForm fields={roofTopFields} numericFields={roofTopFieldsNumberic} apiUrl="http://127.0.0.1/webservices/roofCalc.php" tableName="rooftopDeduction" />
          </Tab>
          <Tab eventKey="wallCalc" title="Wall Calc">
            <TableForm fields={wall} numericFields={facadeFieldsNumberic} apiUrl="http://127.0.0.1/webservices/roofCalc.php" tableName="northWall" />
            <TableForm fields={wall} numericFields={facadeFieldsNumberic} apiUrl="http://127.0.0.1/webservices/roofCalc.php" tableName="southWall" />
            <TableForm fields={wall} numericFields={facadeFieldsNumberic} apiUrl="http://127.0.0.1/webservices/roofCalc.php" tableName="eastWall" />
            <TableForm fields={wall} numericFields={facadeFieldsNumberic} apiUrl="http://127.0.0.1/webservices/roofCalc.php" tableName="westWall" />
          </Tab>
          
          <Tab eventKey="others" title="Other Info">
            {/* Add your other components here */}
          </Tab>
        </Tabs>
      );
    }
    
    export default BootstrapTabs;
