import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  inputValue = '';
  inputClass = 'cenzor-block-input';
  inputPlaceholder = 'word here...';

  textareaValue = '';
  textareaClass = 'cenzor-form-textarea';
  textareaPlaceholder = 'text here...';

  badWords = 'java, tottenham';

  constructor() { }

  ngOnInit(): void { }

  addBadWords(event: Event): void {
    event.preventDefault();
    if (this.inputValue === '') {
      this.inputClass = 'cenzor-block-input invalid';
      this.inputPlaceholder = 'Please write a word!';
    } else {
      this.badWords === '' ? this.badWords += this.inputValue : this.badWords += `, ${this.inputValue}`;
      this.inputClass = 'cenzor-block-input';
      this.inputPlaceholder = 'word here...';
      this.inputValue = '';
    }
  }

  resetBadWords(event: Event): void {
    event.preventDefault();
    this.badWords = '';
  }

  cenzor(event: Event): void {
    event.preventDefault();
    if (this.textareaValue === '') {
      this.textareaClass = 'cenzor-form-textarea invalid';
      this.textareaPlaceholder = 'Please write a word!';
    } else {
      this.textareaClass = 'cenzor-form-textarea valid';
      this.textareaPlaceholder = 'text here...';
      this.badWords.split(', ').forEach((word) => {
        const regex: RegExp = new RegExp(`\\b${word}\\b`, 'mg');
        const star: string = '*'.repeat(word.length);
        this.textareaValue = this.textareaValue.replace(regex, star);
      })
    }
  }
}
