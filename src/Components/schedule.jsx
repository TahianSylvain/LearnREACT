//https://ej2.syncfusion.com/react/documentation/schedule/views?cs-save-lang=1&cs-lang=js
//source ~/.profile && npm install @syncfusion/ej2-react-schedule

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: appData };
  const timeScale = { enable: true, slotCount: 5 };

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Day' interval={2} displayName='2 Days' startHour='09:30' endHour='18:00' timeScale={timeScale} />
      <ViewDirective option='Week' interval={2} displayName='2 Weeks' showWeekend={false} isSelected={true} />
    </ViewsDirective>
    <Inject services={[Day, Week]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);