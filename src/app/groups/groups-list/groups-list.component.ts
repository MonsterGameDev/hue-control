import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Group } from 'src/app/+state/groups/groups.interfaces';
import { selectGroups } from 'src/app/+state/groups/groups.selectors';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  constructor(private store: Store) { }
  groups?: Group[];
  ngOnInit(): void {

    //this.store.select(selectGroups).subscribe(data=> console.log(data));
    //this.store.pipe(select(selectGroups)).subscribe(data=> console.log(data));

  }

}
