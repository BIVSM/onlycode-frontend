import {AfterViewInit, Component, ViewChild, ViewChildren} from '@angular/core';
import {MonacoEditorModule} from "ngx-monaco-editor-v2";
import {FormsModule} from "@angular/forms";
import {EnumValue} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";

@Component({
  selector: 'app-tournament-upload',
  standalone: true,
  imports: [
    MonacoEditorModule,
    FormsModule,
  ],
  templateUrl: './tournament-upload.component.html',
  styleUrl: './tournament-upload.component.css'
})
export class TournamentUploadComponent {
  @ViewChild('selectElement') selectLanguage: any;

  public MonacoIndex = 0;
  public readonly CODE_TEMPLATES: string[] = [
    'function x() {\n    console.log("Hello world!");\n}',
    '#define \u003Ciostream\u003E\nusing namespace std;\nint main() {\n    \n}',
    'def x():\n    print(x)\n\n\na = int(input())\nx()',
  ];
  public readonly EDITOR_OPTIONS: any[] = [
    {theme: 'vs-dark', language: 'javascript'},
    {theme: 'vs-dark', language: 'cpp'},
    {theme: 'vs-dark', language: 'python'},
  ]
  public readonly LANGUAGES: string[] = ['Javascript', 'C++', 'Python'];

  constructor(
  ) {
  }

  changeLanguage() {
    let language = this.selectLanguage.nativeElement.value;
    let index = 0;
    for (index = 0; index < this.LANGUAGES.length; index++) if (this.LANGUAGES[index] == language) break;

    this.MonacoIndex = index;
  }
}
