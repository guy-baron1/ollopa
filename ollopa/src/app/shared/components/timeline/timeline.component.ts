import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Timeline, DataGroupCollectionType, DataItemCollectionType, TimelineOptions } from 'vis-timeline';

@Component({
  selector: 'apo-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {
  @ViewChild('timelineContainer') timelineContainer: ElementRef;
  @Input() items: DataItemCollectionType;
  @Input() groups: DataGroupCollectionType;
  @Input() options: TimelineOptions;

  private timeline: Timeline;
  // TODO: figure out how to configure date to be from left to right
  private demoOptions: TimelineOptions = {
    start: '2000-01-01',
    end: new Date(),
    height: '300px',
    width: '1800px',
    locale: 'en',
    cluster: {
      maxItems: 5,
      showStipes: true
    },
  };
  public demoItems: DataItemCollectionType = [
    {id: 1, content: 'item1', start: '2018-08-21 12:00:00', end: '2018-08-21 13:00:00', group: 1},
    {id: 2, content: 'item2', start: '2018-08-21 14:00:00', end: '2018-08-21 15:00:00', group: 1},
    {id: 3, content: 'item3', start: '2018-08-21 16:00:00', end: '2018-08-21 17:00:00', group: 3},
    {id: 4, content: 'item4', start: '2018-08-21 18:00:00', end: '2018-08-21 19:00:00', group: 4},
  ];
  public demoGroups: DataGroupCollectionType = [
    {id: 1, content: 'group1'},
    {id: 2, content: 'group2'},
    {id: 3, content: 'group3'},
    {id: 4, content: 'group4'},
    {id: 5, content: 'group5'},
    {id: 6, content: 'group6'},
    {id: 7, content: 'group7'},
    {id: 8, content: 'group8'},
  ];

  constructor() { }
  ngAfterViewInit(): void {
    this.timeline = new Timeline(this.timelineContainer.nativeElement, this.demoItems, this.demoGroups, this.demoOptions);
  }

}
