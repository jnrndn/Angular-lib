import { Component } from '@angular/core';
import { LibCoreService } from '@poc/lib-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent {

  constructor(private libCoreService: LibCoreService) { }

  title = 'library-poc';

  handleClick() {
    this.libCoreService.showConsoleOutput();
  }

}
