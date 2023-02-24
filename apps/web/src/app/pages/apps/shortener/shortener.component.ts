/* eslint-disable no-useless-escape */
import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Link } from '../../../shared/interfaces/links.interfaces';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss'],
})
export class ShortenerPageComponent {
  form: FormGroup;
  shortenedLink?: Link;
  isCopied?: boolean;

  constructor(
    private fb: FormBuilder,
    private clipboard: Clipboard,
    private api: ApiService
  ) {
    const regexp =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    this.form = this.fb.group({
      url: this.fb.control('', {
        validators: [Validators.required, Validators.pattern(regexp)],
      }),
      longify: this.fb.control(false),
    });
  }

  handleForm() {
    if (this.form.valid) {
      this.api.createLink(this.form.value).subscribe({
        next: (res) => {
          this.shortenedLink = res;
        },
        error(err) {
          console.error(err);
        },
      });
    }
  }

  get shortened() {
    return window.location.href + this.shortenedLink?.code || '';
  }

  copy(text: string) {
    this.clipboard.copy(text);
    this.isCopied = true;

    setTimeout(() => {
      this.isCopied = false;
    }, 3000);
  }
}
