import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlockService {

  constructor(private http: Http) {}
  
  private blocksUrl = 'app/blocks/shared/block-data.json';
  
  getBlocks(): Observable<Object>{
    return this.http.get(this.blocksUrl)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  
  handleError(error: any) {
    let errorMsg = error.message;
    
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
