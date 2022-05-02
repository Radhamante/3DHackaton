import { Component, OnInit } from '@angular/core';
import {ForumService} from "../shared/services/forumService";
import {Forum} from "../shared/entities/Forum";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  private limit : number = 5;
  private offset : number = 0;
  private forums : Array<Forum> = [];
  private loadMore: boolean = true;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.getForums();
  }

  getForums(): void {
    this.forumService.getForums(this.limit, this.offset).subscribe((data) => {
      console.log(data);
      this.loadMore = data.length === this.limit;
      (data.forEach(item => {
        this.forums.push(item);
      }))
    });
  }

  getMore() : void {
    this.offset ++;
  }

}
