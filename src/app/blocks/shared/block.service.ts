import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Block } from './block.model';

@Injectable()
export class BlockService {
  private githubUrl = 'https://api.github.com/repos/';

  constructor(private http: Http) { }

  getBlocks(): Observable<Block[]> {
    const url = '/assets/misc/block-data.json';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getBlockDetails(repo: string) {
    const url = this.githubUrl + repo;

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // gotta upload these error messages to some logging service to keep track
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
