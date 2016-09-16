import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Block } from './block.model';

@Injectable()
export class BlockService {
  private githubUrl = '//api.github.com/repos/';

  constructor(private http: Http) { }

  getBlocks() {
    const url = 'app/blocks/shared/block-data.json';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .cache()
      .catch(this.handleError);
  }

  getBlockDetails(repo: string): Observable<JSON> {
    const url = this.githubUrl + repo;

    return this.http.get(url)
      .map((res: Response) => res.json())
      .cache()
      .catch(this.handleError);
  }

  handleError(error: any) {
    let errorMsg = error.message;

    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
