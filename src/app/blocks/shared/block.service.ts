import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Block } from './block.model';

@Injectable()
export class BlockService {

  constructor(private http: Http) { }

  private blocksUrl = 'app/blocks/shared/block-data.json';
  private githubUrl = '//api.github.com/repos/';

  getBlocks(): Observable<Block[]> {
    return this.http.get(this.blocksUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  getBlockDetails(repo): Observable<JSON> {
    const url = this.githubUrl + repo;
    return this.http.get(url)
      .map(this.processData)
      .cache()
      .catch(this.handleError);
  }
  
  processData(res: Response) {
    let json = res.json();
    console.log(json);
    return json;
  }

  handleError(error: any) {
    let errorMsg = error.message;

    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
