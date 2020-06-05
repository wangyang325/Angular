import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LOCAL_STORAGE, SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
  router: ActivatedRoute;
  urlId: string;
  paraId: string;
  sessionValue: string;

  constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService,
              @Inject(LOCAL_STORAGE) private localStorage: StorageService,
              private activeRouter: ActivatedRoute) {
    this.router = activeRouter;
    this.sessionValue = sessionStorage.get('view1');
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => this.paraId = params.id);
  }

}
