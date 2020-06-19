import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  Timeline,
  DataGroupCollectionType,
  DataItemCollectionType,
  TimelineOptions,
} from 'vis-timeline';

@Component({
  selector: 'apo-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  @ViewChild('timelineContainer') timelineContainer: ElementRef;
  @Input() items: DataItemCollectionType;
  @Input() groups: DataGroupCollectionType;
  @Input() options: TimelineOptions;
  private timeline: Timeline;
  // TODO: move to config
  private demoOptions: TimelineOptions = {
    start: '2000-01-01',
    end: new Date(),
    height: '300px',
    width: '1500px',
    locale: 'en',
    cluster: {
      maxItems: 2,
      showStipes: true,
    },
    zoomMax: 700000,
    onInitialDrawComplete: () => this.timeline.moveTo(Date.now()),
  };
  private demoItems: DataItemCollectionType = [
    {
      id: 1,
      content: 'item1',
      start: '2020-06-19 13:00:00',
      end: '2020-06-19 18:00:00',
      group: 1,
    },
    {
      id: 2,
      content: 'item2',
      start: '2018-08-21 14:00:00',
      end: '2018-08-21 15:00:00',
      group: 1,
    },
    {
      id: 3,
      content: 'item3',
      start: '2018-08-21 16:00:00',
      end: '2018-08-21 17:00:00',
      group: 3,
    },
    {
      id: 4,
      content: 'item4',
      start: '2018-08-21 18:00:00',
      end: '2018-08-21 19:00:00',
      group: 4,
    },
  ];
  private demoGroups: DataGroupCollectionType = [
    { id: 1, content: 'group1' },
    { id: 2, content: 'group2' },
    { id: 3, content: 'group3' },
    { id: 4, content: 'group4' },
  ];
  private currentTimeUpdateInterval: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.timeline = new Timeline(
      this.timelineContainer.nativeElement,
      this.demoItems,
      this.demoGroups,
      this.demoOptions
    );
    this.currentTimeUpdateInterval = setInterval(
      () => this.timeline.setCurrentTime(Date.now()),
      1000
    );
  }

  ngOnDestroy(): void {
    if (this.currentTimeUpdateInterval) {
      clearInterval(this.currentTimeUpdateInterval);
    }
  }
}
