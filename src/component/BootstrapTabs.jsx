import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DynamicForm from './DynamicForm';

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
      

      const tableName = "buildings";
      return (
        <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="general" title="General Info">
            <DynamicForm fields={generalBuildingInfo} numericFields={numericFields} apiUrl="http://127.0.0.1/webservices/connect.php" tableName={tableName} />
          </Tab>
          <Tab eventKey="others" title="Other Info">
            {/* Add your other components here */}
          </Tab>
        </Tabs>
      );
    }
    
    export default BootstrapTabs;
