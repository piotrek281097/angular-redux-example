import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { Api } from '../../../utils/api';
import { Subject, fromEvent, of, throwError } from 'rxjs';
import { Message } from 'src/app/utils/models';
import { throttleTime, map, switchMap, catchError, retry } from 'rxjs/operators';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  ws$: Subject<Message>;
  @ViewChild('playerTpl', {static: true}) playerTpl: TemplateRef<any>;
  avatars = new Map();


  constructor(
    private container: ViewContainerRef,
    
    private gameService: GameService
  ) { }

  ngOnInit() {

    this.gameService.getUser()
    .subscribe(
      () => this.init(),
      (err)=>{
        this.userNotExists(err);
      }
    )
  }
  userNotExists(err: any) {
    of('your name /^[a-zA-Z]{3,6}$/')
      .pipe(
        map(txt => prompt(txt)),
        switchMap(username => this.gameService.register(username)),
        catchError(({ error }) => {
          alert(JSON.stringify(error));
          return throwError(error);
        }),
        retry(2)
      )
      .subscribe(this.init.bind(this))
  }
  init(): void {
    this.ws$ = webSocket(Api.GAME_END_POINT);

    this.ws$.subscribe((message) => {
      this.updateAvatar(message);

    })

    fromEvent(document, 'mousemove')
      .pipe(
        throttleTime(30)
      )
      .subscribe(({ clientX, clientY }: MouseEvent) => {
        this.ws$.next({ clientX, clientY });
      })

    fromEvent(document, 'click')
    .subscribe(({target}: any)=>{
      if(target.innerText.trim().startsWith('gift')) {
        this.ws$.next({type: 'hit', clientX:0, clientY:0})
    }})
  }
  updateAvatar(message: Message) {
    // console.log(message);

    const exists: EmbeddedViewRef<any> = this.avatars.get(message.username);

    if(exists) {
      exists.context.$implicit = message;
    } else {
      const player = this.container.createEmbeddedView(this.playerTpl, {$implicit: message});
      this.avatars.set(message.username, player);
    }
  }

}

