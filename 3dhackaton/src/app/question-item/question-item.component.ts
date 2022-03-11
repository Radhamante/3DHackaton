import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../model/menu-item";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoriesConstants} from "../../model/categories-constants";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { MenuItemConstants } from 'src/model/menu-item-constants';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {
  private categoryId: number = this.route.snapshot.params['id'];
  public category: Category = CategoriesConstants.getById(this.categoryId);
  constructor(private router: Router, private route: ActivatedRoute) { }
  public chevronRight: any = faChevronRight;
  public workingItems: any[] = MenuItemConstants.WORKING_ANIMATIONS;

  ngOnInit(): void {
  }

  selectQuestion(id: number) {
    this.router.navigate(["/question/"+id])
  }

  getIsNotWorkingAnimation(id: any) {
    return MenuItemConstants.getIsNotWorkingAnimation(id);
  }
}
