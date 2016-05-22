import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Block } from './block.model';

@Injectable()
export class BlockService {

  constructor(private http: Http) { }

  private blocks: Block[] = require('json!./block-data.json');
  private githubUrl = '//api.github.com/repos/';

  getBlocks(): Block[] {
    return this.blocks;
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
