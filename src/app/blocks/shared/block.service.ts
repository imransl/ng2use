import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/cache';

import { Block } from './block.model';

@Injectable()
export class BlockService {
  private githubUrl = '//api.github.com/repos/';

  constructor(private http: Http) { }

  getBlocks(): Observable<Block[]> {
    const url = '/assets/misc/block-data.json';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .cache();
  }

  getBlockDetails(repo: string): Observable<JSON> {
    const url = this.githubUrl + repo;

    return this.http.get(url)
      .map((res: Response) => res.json())
      .cache();
  }

  // handleError(error: any) {
  //   let errorMsg = error.message;

  //   console.error(errorMsg);
  //   return Observable.throw(errorMsg);
  // }

}
