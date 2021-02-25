import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Article} from '../model/Article';

@Component({
  selector: 'app-hacker-new-create',
  templateUrl: './hacker-new-create.component.html',
  styleUrls: ['./hacker-new-create.component.css']
})

export class HackerNewCreateComponent implements OnInit {
  article: Article = new Article();
  articleForm: FormGroup;
  @Output()
  eventEmitter = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      title: new FormControl(''),
      url: new FormControl('')
    });
  }

  onSubmit(){
    this.article = (this.articleForm.value as Article);
    console.log('hacker new create: ' + this.article.title);
    console.log('hacker new create: ' + this.article.url);
  }

  sendToUpdate(): void{
    this.eventEmitter.emit(this.article);

  }

}
