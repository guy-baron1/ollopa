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
    zoomMin: 25000,
    zoomMax: 25000000,
    selectable: false,
    tooltip: {
      template: item => item.content,
      delay: 0,
    },
    onInitialDrawComplete: () => this.timeline.moveTo(Date.now()),
  };
  private demoItems: DataItemCollectionType = [
    {
      id: 1,
      content: 'item1',
      start: Date.now() - 15000,
      end: Date.now() + 15000,
      group: 1,
    },
    {
      id: 2,
      content: 'item2',
      start: Date.now() - 15000,
      end: Date.now() + 15000,
      group: 2,
    },
    {
      id: 3,
      content: 'item3',
      start: Date.now() - 15000,
      end: Date.now() + 15000,
      group: 3,
    },
    {
      id: 4,
      content: 'item4',
      start: Date.now() - 15000,
      end: Date.now() + 15000,
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
    this.timeline.on('click', ev => this.onTimelineClicked(ev));
    this.currentTimeUpdateInterval = setInterval(
      () => this.timeline.setCurrentTime(Date.now()),
      1000
    );
  }

  private onTimelineClicked(event): void {
    // TODO: move timeline to item starttime
    console.log(event);
  }

  ngOnDestroy(): void {
    if (this.currentTimeUpdateInterval) {
      clearInterval(this.currentTimeUpdateInterval);
    }
  }
}
