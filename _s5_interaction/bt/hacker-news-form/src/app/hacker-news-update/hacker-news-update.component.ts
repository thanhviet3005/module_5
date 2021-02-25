import { Component, OnInit } from '@angular/core';
import {Article} from '../model/Article';
interface IHackerNew {
  title: string;
  url: string;
}
@Component({
  selector: 'app-hacker-news-update',
  templateUrl: './hacker-news-update.component.html',
  styleUrls: ['./hacker-news-update.component.css']
})
export class HackerNewsUpdateComponent implements OnInit {
  articleList: Array<Article> = [];
  article: Article;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFromCreate(value: any): void{
    console.log(value);
    this.article = (value as Article);
    this.articleList.push();
}

}
