import React from "react";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  DragAndDrop,
  Resize,
  ResizeEventArgs,
  DragEventArgs,
  EventSettingsModel,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import { RenderCellEventArgs } from "@syncfusion/ej2-schedule";
import { ScrollOptions } from "@syncfusion/ej2-react-schedule";
import { NavigateOptions } from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
// import "font-awesome/css/font-awesome.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { editableInputTypes } from "@testing-library/user-event/dist/utils";

registerLicense("nanti license dimasukin sini");

// Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY_HERE");

const data = [
  {
    Id: 1,
    Subject: "Object presentation",
    StartTime: new Date(2024, 12, 11, 10, 0),
    EndTime: new Date(2024, 12, 11, 12, 0),
    IsAllDay: false,
  },
];

class Calendar extends React.Component {
  onRenderCell = (args: RenderCellEventArgs): void => {
    if (
      args.element.classList.contains("e-header-cells") &&
      args.element.classList.contains("e-disable-dates")
    ) {
      args.element.innerHTML = args.element.innerHTML =
        '<i class="fa-regular fa-clock" style="font-size: 24px; color: gray; justify-content: center; align-items: center; text-align: center;"></i>';
      const element = args.element as HTMLElement; // Cast to HTMLElement
      element.style.color = "red";
      element.style.fontSize = "12px";
    }
  };

  private onDragStart(args: DragEventArgs): void {
    (args.scroll as ScrollOptions).enable = true;
    (args.navigation as NavigateOptions).enable = true;
  }

  private onResizeStart(args: ResizeEventArgs): void {
    (args.scroll as ScrollOptions).enable = true;
    // (args.navigation as NavigateOptions).enable = true;
  }

  public render() {
    return (
      <div className="calendar-container">
        <ScheduleComponent
          width={800}
          height={500}
          currentView="Week"
          dragStart={this.onDragStart.bind(this)}
          resizeStart={this.onResizeStart.bind(this)}
          renderCell={this.onRenderCell}
          eventSettings={{ dataSource: data }}
        >
          <ViewsDirective></ViewsDirective>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}
          />
        </ScheduleComponent>
      </div>
    );
  }
}

export default Calendar;
