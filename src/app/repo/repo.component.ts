import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent {
  public userId: string = 'null';

constructor( private route: ActivatedRoute ) {
    this.route.params.subscribe(params => this.userId = params['username']);
}

}
