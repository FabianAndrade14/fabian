import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('typedText') typedText!: ElementRef;

  phrases = [
    'a frontend developer.',
    'a passionate learner.',
    'a creative coder.',
    'a fullstack enthusiastic.'
  ];

  phraseIndex = 0;
  charIndex = 0;
  typingDelay = 100;
  erasingDelay = 60;
  delayBetweenPhrases = 1500;

  ngAfterViewInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];
    if (this.charIndex < currentPhrase.length) {
      this.typedText.nativeElement.textContent += currentPhrase.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      setTimeout(() => this.erase(), this.delayBetweenPhrases);
    }
  }

  erase() {
    const currentPhrase = this.phrases[this.phraseIndex];
    if (this.charIndex > 0) {
      this.typedText.nativeElement.textContent = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), this.typingDelay);
    }
  }

}
