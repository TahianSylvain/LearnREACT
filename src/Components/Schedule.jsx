//https://ej2.syncfusion.com/react/documentation/schedule/views?cs-save-lang=1&cs-lang=js
//source ~/.profile && npm install @syncfusion/ej2-react-schedule

import * as React from 'react';
import { ScheduleComponent, Day, Week,
   WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

export   const Schedule = () => {
    let data = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2018, 1, 15, 9, 30),
        EndTime: new Date(2018, 1, 15, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2018, 1, 13, 9, 30),
        EndTime: new Date(2018, 1, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    }];
    const eventSettings = { dataSource: data };

    return(
    <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    );
}
